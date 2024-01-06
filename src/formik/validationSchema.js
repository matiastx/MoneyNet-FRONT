import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .min(4, 'Como minimo se requieren 4 caracteres')
        .max(25, 'Como maximo se permiten 25 caracteres')
        .required('Campo requerido'),
    email: Yup.string()
        .email('Debe ser un email valido')
        .required('Campo requerido'),
    subject: Yup.string()
        .min(4, 'Como minimo se requieren 4 caracteres')
        .max(25, 'Como maximo se permiten 25 caracteres')
        .required('Campo requerido'),
    message: Yup.string()
        .min(10, 'Como minimo se requieren 10 caracteres')
        .max(144, 'Como maximo se permiten 144 caracteres')
        .required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
    name: Yup.string()
    .required('Campo Requerido'),
    email: Yup.string()
    .email('Email inválido')
    .required('Campo Requerido'),
    password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido')
})

export const loginValidationSchema = Yup.object({
    email: Yup.string()
    .email('Email inválido')
    .required('Campo Requerido'),
    password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido')
})

export const UserDataValidationSchema = Yup.object({
})

export const verfyValidationSchema = Yup.object({
    code: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido')
})