import React from "react";

const AuthConext = React.createContext({ status: false, login: () => {} });

export default AuthConext;
