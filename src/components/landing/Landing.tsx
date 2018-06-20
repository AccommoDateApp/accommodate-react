import * as React from "react";
import { Navbar } from "../navigation/Navbar";
import { Login } from "./Login";

export const Landing = () => (
  <>
    <Navbar>
      <Login />
    </Navbar>
  </>
);
