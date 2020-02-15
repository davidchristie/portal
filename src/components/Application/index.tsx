import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "../../redux";
import Routes from "../Routes";

const Application: React.FunctionComponent = () => {
  const store = createStore();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
};

export default Application;
