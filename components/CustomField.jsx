import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

const CustomField = ({ name, label }) => (
    <Field
        fullWidth
        component={TextField}
        name={name}
        label={label}
        margin="dense"
        variant="outlined"
    />
);

export default CustomField;
