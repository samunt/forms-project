import React from "react";
import { Box, Button } from "@material-ui/core";
import { useFormikWizard } from "formik-wizard";

const checkProperties = obj => {
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== "") return false;
    }
    return true;
};

const Nav = ({ currentStep, wizard }) => {
    const context = useFormikWizard();

    console.log(context);

    return (
        <Box>
            <Button
                onClick={() => {
                    wizard.push("basic");
                }}
                color="primary"
                variant={currentStep === "basic" ? "contained" : "text"}
            >
                Step 1
            </Button>
            <Button
                onClick={() => {
                    if (checkProperties(context.values.basic)) {
                        wizard.push("basic");
                    } else {
                        wizard.push("spouse");
                    }
                }}
                color="primary"
                variant={currentStep === "spouse" ? "contained" : "text"}
            >
                Step 2
            </Button>
            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*        if (checkProperties(context.values.basic)) {*/}
            {/*            wizard.push("basic");*/}
            {/*        } else if (checkProperties(context.values.address)) {*/}
            {/*            wizard.push("address");*/}
            {/*        } else {*/}
            {/*            wizard.push("company");*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    color="primary"*/}
            {/*    variant={currentStep === "company" ? "contained" : "text"}*/}
            {/*>*/}
            {/*    Step 3*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*        if (checkProperties(context.values.basic)) {*/}
            {/*            wizard.push("basic");*/}
            {/*        } else if (checkProperties(context.values.address)) {*/}
            {/*            wizard.push("address");*/}
            {/*        } else if (checkProperties(context.values.company)) {*/}
            {/*            wizard.push("company");*/}
            {/*        } else {*/}
            {/*            wizard.push("account");*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    color="primary"*/}
            {/*    variant={currentStep === "account" ? "contained" : "text"}*/}
            {/*>*/}
            {/*    Step 4*/}
            {/*</Button>*/}
        </Box>
    );
};

export default Nav;
