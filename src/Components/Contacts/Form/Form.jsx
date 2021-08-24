import React from 'react';
// import PropTypes from 'prop-types';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Label, Input, Button } from './contactForm.styled';
import { useDispatch } from 'react-redux';
import contactsActions from '../../../redux/actions';

 export default function ContactForm(/*{ onSubmit }*/) {

   const dispatch = useDispatch();

   const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     validationSchema: Yup.object({
       name: Yup.string()
         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Имя может состоять только из букв, апострофа, тире и пробелов.')
         .required('Oбязательное поле'),
       number: Yup.string()
         .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +')
         .required('Oбязательное поле'),
     }),
     onSubmit: (values, { setSubmitting, resetForm }) => {
       dispatch(contactsActions.addContact(values.name, values.number));
       setSubmitting(false);
       resetForm();
     },
   });
  
   const { handleSubmit, handleChange, isSubmitting, values, touched, errors } = formik;
   return (
     <Form onSubmit={handleSubmit}>
       <Label>Name
       <Input
         name="name"
         type="text"
         onChange={handleChange}
         value={values.name}
         />
       {touched.name && errors.name ? (
         <>{errors.name}</>
         ) : null}
         </Label>
 
       <Label>Number
       <Input
         id="number"
         name="number"
         type="text"
         onChange={handleChange}
         value={values.number}
         />
       {touched.number && errors.number ? (
         <>{errors.number}</>
       ) : null}
       </Label>

       <Button type="submit" disabled={isSubmitting}>
         <IoPersonAddOutline />
         Add contact
       </Button>
     </Form>
   );
}
 
// ContactForm.propTypes = {
//     onSubmit: PropTypes.func,
// }



// export default function ContactForm({ onSubmit }) {
//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.name) {
//           errors.name = 'Обязательное поле';
//         } else if (!values.number) {
//           errors.number = 'Обязательное поле';
//         } else if (
//           !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
//             values.name,
//           )
//         ) {
//           errors.name =
//             'Имя может состоять только из букв, апострофа, тире и пробелов.';
//         } else if (
//           !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
//             values.number,
//           )
//         ) {
//           errors.number =
//             'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         onSubmit(values);
//         setSubmitting(false);
//         resetForm();
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleSubmit,
//         isSubmitting,
//       }) => (
//         <Form onSubmit={handleSubmit}>
//           <Label>
//             {' '}
//             Name
//             <Input
//               type="text"
//               name="name"
//               onChange={handleChange}
//               value={values.name}
//             />
//           </Label>
//           {errors.name && touched.name && errors.name}
//           <Label>
//             {' '}
//             Number
//             <Input
//               type="tel"
//               name="number"
//               onChange={handleChange}
//               value={values.number}
//             />
//           </Label>
//           {errors.number && touched.number && errors.number}
//           <Button type="submit" disabled={isSubmitting}>
//             <IoPersonAddOutline />
//             Add contact
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
