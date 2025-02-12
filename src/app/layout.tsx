import { homepageMetaData } from "@/configs/metadata";

import { ChildrenType } from "@/types/types";

import "./globals.css";
import Layout from "@/components/layouts/Layout";
import VazirmatnFont from "@/configs/font";

export const metadata = homepageMetaData;

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="fa" dir="rtl" className={VazirmatnFont.className}>
      <body className="max-w-screen-2xl mx-auto bg-foreground text-white font-normal text-base">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
