import React, { Fragment } from "react";
import { Button, Box } from "@material-ui/core";

import Nav from "./Nav";

const FormWrapper = ({
                         children,
                         isLastStep,
                         goToPreviousStep,
                         canGoBack,
                         actionLabel,
                         currentStep,
                         wizard
                     }) => {
    return (
        <Fragment>
            <Nav currentStep={currentStep} wizard={wizard} />
            {children}
            <Box>
                <Button type="button" onClick={goToPreviousStep} disabled={!canGoBack}>
                    Back
                </Button>
                <Button type="submit">
                    {actionLabel || (isLastStep ? "Submit" : "Next step")}
                </Button>
            </Box>
        </Fragment>
    );
};

export default FormWrapper;
