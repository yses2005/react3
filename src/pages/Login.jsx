import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "redux/actions/authActions";
import { FullscreenWrapper, Input, Button } from "components";

function Login() {
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn);
  const loginPending = useSelector((s) => s.auth.loginPending);

  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      history.replace("/");
    }
  }, [isLoggedIn]);

  function handleValueChange(e, valueCb) {
    const newValue = e.target.value;
    valueCb(newValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(name, password);
    // dispatch(login());
    if (!name || !password) {
      alert("The password or name is invalid!");
    } else {
      dispatch(login(name));
    }
  }

  const submitButtonLabel = loginPending ? "Loading..." : "Submit";
  return (
    <FullscreenWrapper>
      <h1 className="m-bottom-4">Log in</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="m-bottom-2"
          onChange={(e) => handleValueChange(e, setName)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="m-bottom-4"
          onChange={(e) => handleValueChange(e, setPassword)}
        />
        <Button
          type="submit"
          label={submitButtonLabel}
          disabled={loginPending}
        />
      </form>
    </FullscreenWrapper>
  );
}

export default Login;
