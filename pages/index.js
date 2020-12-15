import React from "react";
import Head from "next/head";
import MaterialLayout from '../components/Layout/MaterialLayout';
import CheckoutPage from '../components/CheckoutPage';
export default function Home() {
    return (
        <>
            <Head>
                <script>
                    window.setImmediate = window.setTimeout;
                </script>
            </Head>
            <div>
                <MaterialLayout>
                    <CheckoutPage />
                </MaterialLayout>
            </div>
        </>
    );
}

