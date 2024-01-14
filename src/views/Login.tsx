import { StackLayout } from "@progress/kendo-react-layout";
import { ILoginProps } from "../types/LoginTypes";

const defStyle = { style: { margin: 4 } };

export default function Login(props: ILoginProps): JSX.Element {
  return (
    <form onSubmit={props.onSubmit}>
      <StackLayout
        orientation="vertical"
        style={{ minWidth: 250, maxWidth: 400 }}
        align={{ horizontal: "center", vertical: "middle" }}
      >
        <label htmlFor="email" className="required">
          Email{props.renderContent && ` (${props.email})`}
        </label>
        <input
          id="email"
          required
          minLength={6}
          name="email"
          type="email"
          value={props.email}
          placeholder="email"
          {...defStyle}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onInput("email", e.target.value)
          }
        />
        <label htmlFor="password" className="required">
          password{props.renderContent && ` (${props.password})`}
        </label>
        <input
          id="password"
          required
          minLength={6}
          name="password"
          type="password"
          value={props.password}
          placeholder="password"
          {...defStyle}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onInput("password", e.target.value)
          }
        />
        <input type="submit" value="Login" />
      </StackLayout>
    </form>
  );
}
