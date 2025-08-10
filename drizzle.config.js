require('dotenv').config();
module.exports = {
  schema: './utils/schema.tsx',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL
  },
};