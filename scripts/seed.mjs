import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

const seed = [
  {
    title: "Pretium fortalece su práctica de SuccessFactors Employee Central",
    excerpt:
      "Sumamos nuevos consultores certificados para acompañar la migración de clientes desde SAP HCM On-Premise hacia SuccessFactors.",
    tag: "Novedad",
    published_at: "2026-06-10",
  },
  {
    title: "Nuevo proyecto de nómina en la industria minera",
    excerpt:
      "Iniciamos la implementación de Payroll SAP para un grupo minero con operación en tres países de Latinoamérica.",
    tag: "Cliente",
    published_at: "2026-04-22",
  },
  {
    title: "Pretium participó en el SAP HR Summit Chile",
    excerpt:
      "Compartimos casos de éxito sobre gestión del cambio y adopción de SuccessFactors con líderes de RR.HH. del retail y la banca.",
    tag: "Evento",
    published_at: "2026-02-15",
  },
];

for (const item of seed) {
  await client.query(
    `insert into news (title, excerpt, tag, status, published_at, source_name)
     values ($1, $2, $3, 'approved', $4, 'Pretium')
     on conflict do nothing`,
    [item.title, item.excerpt, item.tag, item.published_at]
  );
}

console.log(`Seeded ${seed.length} news items.`);
await client.end();
