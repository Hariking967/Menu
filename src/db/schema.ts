import {
  pgTable,
  text,
  timestamp,
  boolean,
  numeric,
  integer,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const menu = pgTable("menu", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  category: text("category").notNull(),
  name: text("name").notNull(),
  price: numeric("price").notNull(),
  ordercount: integer("ordercount")
    .$defaultFn(() => 0)
    .notNull(),
  createdat: timestamp("createdat")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedat: timestamp("updatedat")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

// Discount table: id, name (refers to menu.name), discount
export const discount = pgTable("discount", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name")
    .notNull()
    .references(() => menu.name, { onDelete: "cascade" }),
  discount: numeric("discount").notNull(),
});

export const order = pgTable("order", {
  s_no: numeric("s_no").primaryKey(),
  token_no: integer("token_no").notNull(),
  username: text("username").notNull(),
  completed: integer("completed")
    .$defaultFn(() => 0)
    .notNull(),
  createdat: timestamp("createdat")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const receipt = pgTable("receipt", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  order_id: numeric("order_id")
    .notNull()
    .references(() => order.s_no, { onDelete: "cascade" }),
  name: text("name")
    .notNull()
    .references(() => menu.name, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(),
});
