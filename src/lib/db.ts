import { Pool } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
}

export const pool =
  global._pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  global._pgPool = pool;
}

export type NewsStatus = "pending" | "approved" | "rejected";

export type NewsRow = {
  id: number;
  source_url: string | null;
  source_name: string | null;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  tag: string | null;
  status: NewsStatus;
  scraped_at: Date;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
};

export async function getApprovedNews(limit = 6): Promise<NewsRow[]> {
  const { rows } = await pool.query<NewsRow>(
    `select * from news
     where status = 'approved'
     order by coalesce(published_at, scraped_at) desc
     limit $1`,
    [limit]
  );
  return rows;
}

export async function getAllNews(): Promise<NewsRow[]> {
  const { rows } = await pool.query<NewsRow>(
    `select * from news
     order by
       case status when 'pending' then 0 when 'approved' then 1 else 2 end,
       scraped_at desc`
  );
  return rows;
}

export async function setNewsStatus(id: number, status: NewsStatus) {
  await pool.query(
    `update news
     set status = $2,
         published_at = case when $2 = 'approved' and published_at is null then now() else published_at end,
         updated_at = now()
     where id = $1`,
    [id, status]
  );
}

export async function deleteNews(id: number) {
  await pool.query(`delete from news where id = $1`, [id]);
}
