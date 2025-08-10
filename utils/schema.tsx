import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const AiOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: text("formData"),
  templateSlug: text("templateSlug"),
  aiResponse: text("aiResponse"),
  createdBy: text("createdBy"),
  createdAt: timestamp("createdAt").defaultNow(),
});