import { Passero_One } from "next/font/google"

export const userRegistrationformControls = [
    {
        name: 'userName',
        label: 'User Name',
        placeholder: 'Please Enter the Username',
        componentType: 'input',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Please Enter the Email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Please Enter the Password',
        componentType: 'input',
        type: 'password',
    },

]

export const initialSignUpFormData = {
    userName: "",
    email: "",
    password: ""
}