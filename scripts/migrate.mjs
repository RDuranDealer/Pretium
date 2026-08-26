import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

await client.query(`
  create table if not exists news (
    id serial primary key,
    source_url text,
    source_name text,
    title text not null,
    excerpt text,
    content text,
    image_url text,
    tag text,
    status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
    scraped_at timestamptz not null default now(),
    published_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );
`);

await client.query(`
  create index if not exists idx_news_status on news (status);
`);

await client.query(`
  create unique index if not exists idx_news_source_url
    on news (source_url)
    where source_url is not null;
`);

console.log("Migration applied.");
await client.end();
