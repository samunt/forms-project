import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from '../components/ContactInformation';
import OrgInformation from '../components/OrgInformation';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        'button': {
            center: 'center margin-left: 20px'
        }
    }
}));

const steps = [ContactInformation, OrgInformation];

export default props => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const handlePrev = () => {
        setActiveStep(Math.max(activeStep - 1, 0));
    };

    const handleNext = () => [
        setActiveStep(Math.min(activeStep + 1, steps.length - 1))
    ];

    const onSubmit = (values, formikBag) => {
        const { setSubmitting } = formikBag;

        if (!isLastStep()) {
            setSubmitting(false);
            handleNext();
            return;
        }

        console.log(values);

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    const initialValues = steps.reduce(
        (values, { initialValues }) => ({
            ...values,
            ...initialValues
        }),
        {}
    );
    const ActiveStep = steps[activeStep];
    const validationSchema = ActiveStep.validationSchema;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            className={classes.root}
        >
            {({ isSubmitting, touched, values }) => (
                <>
                    <Form>
                        <Stepper alternativeLabel activeStep={activeStep}>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel>{steps[index].label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <SwipeableViews index={activeStep}>
                            {steps.map((step, index) => {
                                const Component = steps[index];
                                return <Component key={index} />;
                            })}
                        </SwipeableViews>
                        <div className={classes.button}>
                            <Button
                                disabled={activeStep === 0 || isSubmitting}
                                onClick={handlePrev}
                                variant="contained" color="secondary"
                            >
                                Previous
                            </Button>
                            <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">
                                {isLastStep() ? 'Submit' : 'Next'}
                            </Button>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
};
