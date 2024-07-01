

import { drizzle } from 'drizzle-orm/postgres-js';

import * as dotenv from 'dotenv';
import postgres from 'postgres';
import * as schema from './Schema';




const connectionString = process.env.DATABASE_URL

console.log(connectionString )

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString as string , { prepare: false })

const db = drizzle(client, { schema: { ...schema } });

export default db