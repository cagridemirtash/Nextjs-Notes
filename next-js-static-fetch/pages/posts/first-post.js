import Link from "next/link";
import React from "react";
import ImageOptimization from "../../components/Image/ImageOptimization";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log("Script loaded");
          }}
        />
        <div>
          <h1>First Post</h1>
          <ImageOptimization />
          <h2>
            <Link href="/">Back to Homepage</Link>
          </h2>
        </div>
      </Layout>
    </>
  );
}
