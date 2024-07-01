
import * as dotenv from 'dotenv';
import { defineConfig, type Config } from 'drizzle-kit';






export default ({
  schema: './Server/db/Schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

  verbose: true,
  strict: true,
}) satisfies Config;
