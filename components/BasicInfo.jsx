import React, { Fragment } from "react";

import CustomField from "./CustomField";

const BasicInfo = () => (
    <Fragment>
        <CustomField name="firstName" label="First Name" />
        <CustomField name="lastName" label="Last Name" />
        <CustomField name="email" label="Email" />
        <CustomField name="phone" label="Phone Number" />
    </Fragment>
);

export default BasicInfo;
