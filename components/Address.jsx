import React, { Fragment } from "react";

import CustomField from "./CustomField";

const Address = () => (
    <Fragment>
        <CustomField name="street" label="Street" />
        <CustomField name="district" label="District" />
        <CustomField name="country" label="Country" />
    </Fragment>
);

export default Address;
