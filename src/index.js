// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styled from 'styled-components';

import { worker } from "./mocks/browser";
worker.start();

const WrapperDiv = styled.div `
    test-align: right;

`

ReactDOM.render(<App />, document.getElementById("root"));
