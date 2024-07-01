import { Many, relations } from 'drizzle-orm';
import {pgTable, varchar, serial, text, timestamp, uuid, integer, boolean } from 'drizzle-orm/pg-core';


export const usersTable = pgTable("Users",{
    name: varchar('name', {length: 255} ).notNull() ,
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email').notNull().unique(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull()
    
})

export const productsTable =  pgTable("Products",{
    name: varchar("name", {length: 255}).notNull().primaryKey(),
    priceInCents: integer("priceInCents").default(0).notNull(),
    filePath: varchar("filepath", {length: 255}),
    imagePath: varchar("imagePath", {length: 255}),
    description: text("description"),
    isAvailableForPurchase: boolean("isAvailableForPurchase").default(false).notNull(),
    createdAt: timestamp('createdAt',{ precision: 6, withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updatedAt',{ precision: 6, withTimezone: true }).notNull()
    
})


export const ordersTable = pgTable("Orders",{
    id: serial("id").unique().notNull(),
    pricePaidInCents: integer("priceInCents").default(0).notNull(),
    userId: varchar("userId").notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull()
    

})


export const DownloadVerification = pgTable("DownloadVerification" ,{
    id: uuid("id").defaultRandom().notNull(),
    productName: varchar("productName").references(() => productsTable.name, {onDelete:"restrict"}),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    expiresAt: timestamp("expiresAt").defaultNow()

})







export const userRelations = relations(usersTable,({many}) => ({
    orders: many(ordersTable)

})
)

export const orderRelations = relations(ordersTable, ({many}) => ({
    items: many(productsTable)
    

}))
