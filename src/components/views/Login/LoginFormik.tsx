import { ErrorMessage, Field, Formik, Form } from "formik";
import { InitialLoginState } from "@common/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@stores/hooks";
import { update } from "@stores/redux";
import { StackLayout } from "@progress/kendo-react-layout";
import { loginSchema } from "./const/LoginSchema";
import styles from "./styles/login.module.css";
import LoginWrapper from "@views/LoginWrapper";

const StyledErrorMessage = (props : { name: string}) => (<ErrorMessage name={props.name}>
  {msg => <div className={styles.error}>{msg}</div>}
</ErrorMessage>)

export default function LoginFormik(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((redState) => redState.loginReducer);

  return (
    <LoginWrapper email={reduxState.email}>
      <Formik
        initialValues={InitialLoginState}
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
            <div className={styles["default-margin"]}>
              <label
                className={`${styles["margin-right"]} ${styles.required}`}
                htmlFor="email"
              >
                Email:{" "}
              </label>
              <StackLayout orientation="vertical">
                <Field className={styles["input-field"]} name="email" />
                <StyledErrorMessage name="email" />
              </StackLayout>
            </div>

            <div className={styles["default-margin"]}>
              <label
                className={`${styles["margin-right"]} ${styles.required}`}
                htmlFor="password"
              >
                Password:{" "}
              </label>
              <StackLayout orientation="vertical">
                <Field
                  className={styles["input-field"]}
                  name="password"
                  type="password"
                />
                <StyledErrorMessage name="password" />
              </StackLayout>
            </div>

            <button className={styles.submit} type="submit">
              Submit
            </button>
          </StackLayout>
        </Form>
      </Formik>
    </LoginWrapper>
  );
}
