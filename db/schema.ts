import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    body: text().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});