import onboardingFormModel from './formModels';
const {
    formField: {
        firstName,
        lastName,
        email,
        phone,
        spouse
    }
} = onboardingFormModel;

export default {
    [firstName.name]: '',
    [lastName.name]: '',
    [email.name]: '',
    [phone.name]: '',
    [spouse.name]: false,
};