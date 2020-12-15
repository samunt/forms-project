import React from "react";
import { FormikWizard } from "formik-wizard";
import FormWrapper from "../components/FormWrapper";
import steps from "../components/steps";
import { Box } from "@material-ui/core";
import Head from "next/head";
export default function Home() {
    const handleSubmit = React.useCallback(values => {
        console.log("full values:", values);
    }, []);

    return (
        <>
            <Head>
                <script>
                    window.setImmediate = window.setTimeout;
                </script>
            </Head>
            <Box textAlign="center">
                <FormikWizard
                    steps={steps}
                    onSubmit={handleSubmit}
                    render={FormWrapper}
                />
            </Box>
        </>
    );
}

