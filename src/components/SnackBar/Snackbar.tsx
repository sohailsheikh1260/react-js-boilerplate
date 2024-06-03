import { Snackbar as MUISnackbar } from "@mui/material";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import React from "react";

type IProps = {
  open: boolean;
  title: string;
  type: AlertColor;
  handleClose: () => void;
  direction?: { vertical: "bottom"; horizontal: "left" };
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
  },
);

function Snackbar(props: IProps) {
  const { open, title, type, handleClose, direction } = props;

  return (
    <MUISnackbar
      anchorOrigin={direction}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {title}
      </Alert>
    </MUISnackbar>
  );
}

export default Snackbar;
