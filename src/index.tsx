import * as React from "react";
import * as ReactDOM from "react-dom";

import "App/assets/scss/main.scss";
import { Hello } from "App/components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript 3" framework="React 16" />,
  document.getElementById("app"),
);
