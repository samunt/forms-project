import React, { Fragment } from "react";

import CustomField from "./CustomField";

const AccountInfo = () => (
    <Fragment>
        <CustomField name="accountName" label="Account Name" margin="dense" />
        <CustomField name="accountNumber" label="Account Number" />
        <CustomField name="bankName" label="Bank Name" />
        <CustomField name="sortingNumber" label="Sorting Number" margin="dense" />
    </Fragment>
);

export default AccountInfo;
