"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {FixedPlugin, Footer, Layout, Navbar} from "@/components";
import Hero from "@/app/hero";
import {useEffect, useState} from "react";
import Loading from "@/components/loading/loading";
import { useRouter } from 'next/router';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "NextJS Tailwind App Presentation Page",
//   description:
//     "We are thrilled to offer you a Free App Presentation Template, a beautifully designed and user-friendly Tailwind CSS and Material Tailwind theme crafted specifically for app developers like you. The free app presentation template includes key features such as hero, features, FAQ, stats, and testimonial sections.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
      {loading? <Loading/> : (
          <Layout>
            <Navbar/>
            <Hero />
            {children}
            {/*<FixedPlugin />*/}
            <Footer />
          </Layout>
      )}
      </body>
    </html>
  );
}
