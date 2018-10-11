import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "App/components/Hello";
import 'App/assets/scss/main.scss';

ReactDOM.render(
    <Hello compiler="TypeScript 3" framework="React 16" />,
    document.getElementById("app")
);