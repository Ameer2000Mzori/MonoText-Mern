export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

// export const validationSchema = Yup.object().shape({
//   firstname: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastname: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Invalid email address').required('Required'),
//   phonenumber: Yup.string().required('Required'),
//   age: Yup.number()
//     .min(0, 'Too Short!')
//     .max(100, 'Too Long!')
//     .required('Required'),
//   gender: Yup.string().required('Required'),
//   country: Yup.string().required('Required'),
//   city: Yup.string().required('Required'),
//   textarea: Yup.string(),
// })
