import * as React from "react";
import { NavLink } from "react-router-dom";
import * as TestImg from "app/assets/img/test.png";

export interface IHomeProps {
  compiler: string;
  framework: string;
}

// 'IHomeProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Home extends React.Component<IHomeProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h2>Env: {process.env.ENV}</h2>
        <img src={TestImg} />
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>
    );
  }
}
