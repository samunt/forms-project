import * as Yup from 'yup';
import checkoutFormModel from './formModels';
const {
    formField: {
        firstName,
        lastName,
        email,
        phone,
        spouse,
    }
} = checkoutFormModel;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default [
    Yup.object().shape({
        [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
        [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
        [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
        [phone.name]: Yup.string().matches(phoneRegExp,`${phone.requiredErrorMsg}`),
    }),
    Yup.object().shape({
        [spouse.name]: Yup.boolean().required(`${spouse.requiredErrorMsg}`),
    })
];
