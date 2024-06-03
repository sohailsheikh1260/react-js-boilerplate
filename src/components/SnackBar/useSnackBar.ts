import React from "react";

import SnackbarContext from "./SnackBarContext";

export default function useConfirmModal() {
  return React.useContext(SnackbarContext);
}
