import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ContactInformation = props => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >

            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardContent>
                        <section>
                            <Typography variant="h3" component="h1">
                                Contact Information
                            </Typography>
                            <Field name="firstName" label="First Name" component={TextField} />
                            <Field name="lastName" label="Last Name" component={TextField} />
                        </section>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

ContactInformation.label = 'Contact Information';
ContactInformation.initialValues = {
    firstName: '',
    lastName: ''
};
ContactInformation.validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name')
});

export default ContactInformation;
