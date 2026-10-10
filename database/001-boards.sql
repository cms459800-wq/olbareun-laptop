CREATE TABLE IF NOT EXISTS board_notices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(120) NOT NULL,
  body text NOT NULL CHECK (length(body) BETWEEN 1 AND 20000),
  display_date date NOT NULL DEFAULT CURRENT_DATE,
  views integer NOT NULL DEFAULT 0 CHECK (views >= 0),
  pinned boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS board_notices_listing ON board_notices (published, pinned DESC, display_date DESC, created_at DESC);
CREATE TABLE IF NOT EXISTS board_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  receipt varchar(32) NOT NULL UNIQUE,
  title varchar(120) NOT NULL,
  author varchar(40) NOT NULL,
  phone varchar(30) NOT NULL,
  location varchar(120) NOT NULL,
  body text NOT NULL CHECK (length(body) BETWEEN 1 AND 10000),
  password_hash text NOT NULL,
  reply text NOT NULL DEFAULT '',
  status varchar(20) NOT NULL DEFAULT 'received' CHECK (status IN ('received','reviewing','answered')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS board_inquiries_listing ON board_inquiries (created_at DESC);
CREATE TABLE IF NOT EXISTS board_challenges (
  id uuid PRIMARY KEY,
  browser_hash text NOT NULL,
  answer_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL
);
CREATE TABLE IF NOT EXISTS board_rate_limits (
  key text PRIMARY KEY,
  hits integer NOT NULL DEFAULT 1,
  expires_at timestamptz NOT NULL
);
CREATE TABLE IF NOT EXISTS board_notice_reads (
  notice_id uuid NOT NULL REFERENCES board_notices(id) ON DELETE CASCADE,
  browser_hash text NOT NULL,
  read_day date NOT NULL DEFAULT CURRENT_DATE,
  PRIMARY KEY (notice_id, browser_hash, read_day)
);
-- No browser-facing Data API. Private records are only read by authenticated server routes.
