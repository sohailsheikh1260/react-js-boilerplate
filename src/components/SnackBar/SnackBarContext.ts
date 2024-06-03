import React from "react";

import { SnackbarContextType } from "./SnackBarProvider";

const SnackbarContext = React.createContext<SnackbarContextType | undefined>(
  undefined,
);
export default SnackbarContext;
