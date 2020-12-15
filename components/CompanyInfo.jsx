import React, { Fragment } from "react";

import CustomField from "./CustomField";

const CompanyInfo = () => {
    return (
        <Fragment>
            <CustomField name="companyName" label="Company Name" />
            <CustomField name="designation" label="Designation" />
            <CustomField name="workedFor" label="Worked For (in Years)" />
        </Fragment>
    );
};

export default CompanyInfo;
