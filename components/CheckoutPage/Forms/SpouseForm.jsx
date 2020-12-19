import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CheckboxField, RadioField } from '../../FormFields';
import FormHelperText from "@material-ui/core/FormHelperText";
import CustomizedRadios from "../../FormFields/RadioField";
import InputField from "../../FormFields/InputField";
import {event} from "next/dist/build/output/log";

export default function SpouseForm(props) {
    const {
        formField: {
            spouse
        }
    } = props;

    const [state, setState] = React.useState({
        yes: false,
        no: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { yes, no } = state;
    const error = [yes, no].filter((v) => v).length !== 1;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Do you have a spouse?
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {/*<CheckboxField*/}
                    {/*    name={spouse.name}*/}
                    {/*    label="Yes"*/}
                    {/*    checked={yes}*/}
                    {/*    onChange={handleChange}*/}
                    {/*/>*/}
                    {/*<CheckboxField*/}
                    {/*    name={spouse.name}*/}
                    {/*    label="No"*/}
                    {/*    checked={no}*/}
                    {/*    onChange={handleChange}*/}
                    {/*/>*/}
                    <CustomizedRadios />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormHelperText style={{color: 'red'}}>{error ? 'Please select only one' : ''}</FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name="spouseAge" label="Spouse Age" fullWidth />
                    {/*IF YES THEN HOW OLD*/}
                    {/*<InputField name={cvv.name} label={cvv.label} fullWidth />*/}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
