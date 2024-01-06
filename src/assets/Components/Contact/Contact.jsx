import React from 'react'
import { ContactContainer, Form, ContactButton } from './Contact.Styled';
import { Formik } from 'formik';
import { contactInitialValues } from '../../../formik/initialValues';
import { contactValidationSchema } from '../../../formik/validationSchema';
import ContactInput from '../UX/ContactInput/ContactInput';
import ContactTextArea from '../UX/ContactInput/ContactTextArea';
import { Button } from '../UX/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, toggleModalHidden } from '../../../Redux/modal/modalSlice';


const Contact = () => {

    const modal = useSelector(state => state.modal.hiddenModal)

    const dispatch = useDispatch()

    const ShowModal = (title, color) => {
        if(modal){
        dispatch(toggleModalHidden())
        dispatch(changeModal({title, color}))
        }
    }

    return (
    <ContactContainer>
        <h2>Ponte en contacto con Nosotros!</h2>
        <p>Por favor, completa el formulario para ponerte en contacto con nosotros. Si tienes alguna pregunta o comentario, no dudes en escribirnos. ¡Estamos deseando saber de ti!</p>
        <Formik
        initialValues={contactInitialValues}
        validationSchema={contactValidationSchema}
        onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
            ShowModal('Consulta enviada correctamente!', 'var(--CelesteClaro)')
        }}
        >
            <Form>
                <ContactInput name='name' type="text" label='Nombre' placeholder="Ingrese su Nombre" />
                <ContactInput name='email' type="text" label='Email' placeholder="Ingrese su correo electrónico" />
                <ContactInput name='subject' type="text" label='Asunto' placeholder="Ingrese el motivo de su consulta" />
                <ContactTextArea name='message' type="textArea" label='Consulta' placeholder="Ingrese su consulta" />
                <Button onClick='Submit'>Enviar</Button>
            </Form>
        </Formik>
    </ContactContainer>
)
}

export default Contact