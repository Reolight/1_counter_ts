import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("ожидается электронная почта")
      .min(6, "не менее 6 символов")
      .required("обязательное поле"),
    password: Yup.string()
      .min(6, "не менее 6 символов")
      .required("обязательное поле"),
  });