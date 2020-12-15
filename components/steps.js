import { object, string, number } from "yup";
import BasicInfo from "../components/BasicInfo";
import Spouse from "../components/Spouse";

export default [
    {
        id: "basic",
        component: BasicInfo,
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        },
        validationSchema: object().shape({
            firstName: string().required("First Name is required"),
            lastName: string().required("Last Name is required"),
            email: string().email().required("Vlaid email is required"),
        }),
        actionLabel: "Continue"
    },
    {
        id: "spouse",
        component: Spouse,
        actionLabel: "Continue"
    }
];
