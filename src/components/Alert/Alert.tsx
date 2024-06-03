import Close from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

type IProps = {
  open: boolean;
  title: string;
  message: string;
  cancelText: string;
  confirmText: string;
  handleClose: () => void;
  onConfirm: () => void;
};

function Alert(props: IProps) {
  const {
    open,
    title,
    message,
    handleClose,
    onConfirm,
    cancelText,
    confirmText,
  } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      sx={{ maxWidth: "450px", margin: "auto" }}
    >
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" right={0} top={0}>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          sx={{ fontSize: "0.7rem" }}
          variant="contained"
          onClick={handleClose}
        >
          {cancelText}
        </Button>
        <Button
          color="secondary"
          sx={{ fontSize: "0.7rem" }}
          variant="contained"
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;
