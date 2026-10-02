"""Audit the actual generated HTML after npm run build."""
from pathlib import Path
from html.parser import HTMLParser
from collections import defaultdict
import json
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=''; self.h1=0; self.h1_text=''; self.in_h1=False; self.images_missing_alt=0; self.meta={}; self.canonical=[]; self.links=[]; self.in_title=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self.in_title=True
        if tag=='h1': self.h1+=1; self.in_h1=True
        if tag=='img' and 'alt' not in a: self.images_missing_alt+=1
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href'))
        if tag=='a': self.links.append(a.get('href',''))
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
        if tag=='h1': self.in_h1=False
    def handle_data(self, text):
        if self.in_title: self.title+=text
        if self.in_h1: self.h1_text+=text

root=Path('.next/server/app'); pages={}; issues=[]
for f in root.rglob('*.html'):
    route='/'+str(f.relative_to(root)).removesuffix('.html')
    if route in ['/_not-found','/404','/500']: continue
    if route=='/index': route='/'
    p=Page(); p.feed(f.read_text()); pages[route]=p
    if p.h1!=1: issues.append(f'{route}: H1 count {p.h1}')
    if p.images_missing_alt: issues.append(f'{route}: images missing alt {p.images_missing_alt}')
    if route.startswith(('/busan/','/regions/')) and p.h1_text.strip()!=p.title.split(' | ')[0].strip(): issues.append(f'{route}: regional H1 differs from title')
    if not p.title or not p.meta.get('description'): issues.append(f'{route}: missing title/description')
    expected='https://www.macpro.kr'+('' if route=='/' else route)
    if len(p.canonical)!=1 or p.canonical[0].rstrip('/')!=expected.rstrip('/'): issues.append(f'{route}: canonical {p.canonical}')
    if p.meta.get('og:url','').rstrip('/')!=expected.rstrip('/'): issues.append(f'{route}: missing/wrong OG URL')
    if p.meta.get('og:description')!=p.meta.get('description'): issues.append(f'{route}: OG description differs')
    if 'noindex' in p.meta.get('robots',''): issues.append(f'{route}: noindex')
duplicates={}
for name, getter in [('title',lambda p:p.title),('description',lambda p:p.meta.get('description','')),('canonical',lambda p:tuple(p.canonical)),('h1',lambda p:p.h1_text.strip())]:
    groups=defaultdict(list)
    for route,p in pages.items(): groups[getter(p)].append(route)
    duplicates[name]=[v for v in groups.values() if len(v)>1]
    for group in duplicates[name]: issues.append(f'duplicate {name}: {group}')
for route,p in pages.items():
    for href in p.links:
        target=href.split('#')[0].split('?')[0]
        if target.startswith('/') and not target.startswith('//') and target and target.rstrip('/') not in {r.rstrip('/') for r in pages}:
            issues.append(f'{route}: broken internal page {target}')
sitemap_file=root/'sitemap.xml.body'
if sitemap_file.exists():
    urls={x.text.rstrip('/') for x in ET.fromstring(sitemap_file.read_text()).iter() if x.tag.endswith('}loc')}
    expected={'https://www.macpro.kr'+('' if r=='/' else r) for r in pages}
    if urls!=expected: issues.append(f'sitemap mismatch: missing={expected-urls}, extra={urls-expected}')
else: issues.append('missing built sitemap')
result={'pages':len(pages),'duplicate_groups':duplicates,'issues':sorted(set(issues))}
print(json.dumps(result,ensure_ascii=False,indent=2))
raise SystemExit(bool(issues))
