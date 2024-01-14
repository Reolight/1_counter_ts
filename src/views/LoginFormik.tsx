import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { InitialLoginState } from "../types/LoginTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { update } from "../stores/redux/loginReduxStore";
import { StackLayout } from "@progress/kendo-react-layout";
import { CSSProperties } from "react";
import WelcomeMessage from "./WelcomeMessage";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ожидается электронная почта")
    .min(6, "не менее 6 символов")
    .required("обязательное поле"),
  password: Yup.string()
    .min(6, "не менее 6 символов")
    .required("обязательное поле"),
});

const defStyle: CSSProperties = { margin: 4 };

export default function LoginFormik(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((redState) => redState.loginReducer);

  return (
    <StackLayout orientation="vertical">
      <WelcomeMessage logged={!!reduxState.email} email={reduxState.email} />
      <Formik
        initialValues={{ ...InitialLoginState }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(
              update({ email: values.email, password: values.password })
            );
            navigate("success");
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <StackLayout orientation="vertical">
            <div style={defStyle}>
              <label style={{ marginRight: 4 }} htmlFor="email">
                Email:{" "}
              </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>

            <div style={defStyle}>
              <label style={{ marginRight: 4 }} htmlFor="password">
                Password:{" "}
              </label>
              <Field name="password" type="password"></Field>
              <ErrorMessage name="password" />
            </div>
            <button style={{ ...defStyle, width: 100 }} type="submit">
              Submit
            </button>
          </StackLayout>
        </Form>
      </Formik>
    </StackLayout>
  );
}
