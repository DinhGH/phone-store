import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      "src/generated/**", // Bỏ qua Prisma generated
      "prisma/generated/**", // Nếu prisma generate ở đây
      ".next/**", // Bỏ qua build Next.js
      "dist/**", // Nếu có thư mục build
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
