import React from "react";
import useSignup from "../../hooks/useSignup";
import Button from "../Button";
import Form from "../Form";
import Row from "../Row";
import TextField from "../TextField";

const SignupForm: React.FunctionComponent = () => {
  const { loading, signup } = useSignup();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const canSubmit = email.length > 0 && password.length > 0 && !loading;
  return (
    <Form onSubmit={() => signup(email, password)}>
      <TextField
        id="email"
        label="Email"
        onChange={setEmail}
        type="email"
        value={email}
      />
      <TextField
        id="password"
        label="Password"
        onChange={setPassword}
        type="password"
        value={password}
      />
      <Row right>
        <Button disabled={!canSubmit} type="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

export default SignupForm;
