ALTER TABLE board_inquiries ADD COLUMN IF NOT EXISTS is_sample boolean NOT NULL DEFAULT false;
