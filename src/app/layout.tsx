import { homepageMetaData } from "@/configs/metadata";
import mirzaFont from "@/configs/font";

import { ChildrenType } from "@/types/types";

import "./globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata = homepageMetaData;

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="fa" dir="rtl" className={mirzaFont.className}>
      <body className="font-medium text-lg">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
