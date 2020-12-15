import React, { Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import {Button, Typography} from "@material-ui/core";

const Spouse = () => {
    return (
        <Fragment>
            <div>
                <Typography variant="h4" gutterBottom>
                    Do you have a spouse?
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" style={{ width: '150px'}}>
                            Yes
                        </Button>
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="contained" color="primary" style={{ width: '150px'}}>
                            No
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    );
};

export default Spouse;
