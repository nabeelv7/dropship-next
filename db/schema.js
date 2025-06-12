import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const admin = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
});
