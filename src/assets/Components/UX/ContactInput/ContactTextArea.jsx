import { ErrorMessage, Field } from "formik";
import { ContactInputContainer, ContactErrorMessage, ContactInputTextArea, ContactLabelStyled } from "./ContactInput.Styled";

const ContactTextArea = ({ type, placeholder, name, label }) => {
    return (
        <Field name={name}>
                    {({ field, form: { touched, errors } }) =>
                    <ContactInputContainer>
                        <ContactLabelStyled for={field.name}>{label}</ContactLabelStyled>
                        <ContactInputTextArea
                            type={type}
                            placeholder={placeholder}
                            {...field}
                            isError={errors[field.name] && touched[field.name]}
                        />
                        <ErrorMessage name={field.name}>
                            {message => <ContactErrorMessage>{message}</ContactErrorMessage>}
                        </ErrorMessage>
                    </ContactInputContainer>
                    }
        </Field>
    )
}

export default ContactTextArea;