import { StackLayout } from "@progress/kendo-react-layout";
import { LoginProps } from "@common/types";
import styles from "./styles/login.module.css";

export default function Login(props: LoginProps): JSX.Element {
  return (
    <form onSubmit={props.onSubmit}>
      <StackLayout
        orientation="vertical"
        align={{ horizontal: "center", vertical: "middle" }}
      >
        <label htmlFor="email" className={styles.required}>
          Email{props.renderContent && ` (${props.email})`}
        </label>
        <input
          required
          id="email"
          className={styles["default-margin"]}
          minLength={6}
          name="email"
          type="email"
          value={props.email}
          placeholder="email"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onInput("email", e.target.value)
          }
        />
        <label htmlFor="password" className={styles.required}>
          password{props.renderContent && ` (${props.password})`}
        </label>
        <input
          required
          id="password"
          className={styles['default-margin']}
          minLength={6}
          name="password"
          type="password"
          value={props.password}
          placeholder="password"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onInput("password", e.target.value)
          }
        />
        <input type="submit" value="Login" />
      </StackLayout>
    </form>
  );
}
