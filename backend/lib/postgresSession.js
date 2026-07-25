const pg = require('pg');

const databaseUrl =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error('Missing Postgres connection string. Set DATABASE_URL, POSTGRES_URL_NON_POOLING, POSTGRES_PRISMA_URL, or POSTGRES_URL.');
}

const globalForPg = global;

const pgPool = globalForPg.__physicsPgPool || new pg.Pool({
  connectionString: databaseUrl,
});

if (process.env.NODE_ENV !== 'production') {
  globalForPg.__physicsPgPool = pgPool;
}

module.exports = pgPool;
