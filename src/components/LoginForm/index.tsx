import React from "react";
import useLogin from "../../hooks/useLogin";
import Button from "../Button";
import Form from "../Form";
import TextField from "../TextField";

const LoginForm: React.FunctionComponent = () => {
  const { loading, login } = useLogin();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const canSubmit = email.length > 0 && password.length > 0 && !loading;
  return (
    <Form onSubmit={() => login(email, password)}>
      <TextField
        id="email"
        label="Email"
        name="email"
        onChange={setEmail}
        type="email"
        value={email}
      />
      <TextField
        id="password"
        label="Password"
        name="password"
        onChange={setPassword}
        type="password"
        value={password}
      />
      <Button disabled={!canSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
