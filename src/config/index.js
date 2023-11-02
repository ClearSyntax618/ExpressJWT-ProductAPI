import { config } from "dotenv";
config();

export const POSTGRES_URI = process.env.POSTGRES_URI || "postgresql://postgres:admin@localhost:5432/sales?connect_timeout=10";
export const PORT = process.env.PORT || 4000;
export const SECRET = process.env.SECRET;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";