import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
//Title Link CheckedId

export default function AddDialog({ open, handleClose, handleSubmit }) {
  const titleRef = useRef();
  const linkRef = useRef();
  const idRef = useRef();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h3" color={"black"}>
          Add an Uptime Check
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          marginTop="20px"
          label="Uptime Check Title"
          variant="standard"
          inputRef={titleRef}
          fullWidth
          autoComplete="off"
        />
        <TextField
          marginTop="20px"
          label="Link of the checked URL"
          variant="standard"
          inputRef={linkRef}
          fullWidth
          autoComplete="off"
        />
        <TextField
          marginTop="20px"
          label="Uptime Check Id"
          variant="standard"
          inputRef={idRef}
          fullWidth
          autoComplete="off"
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() =>
            handleSubmit({
              name: titleRef.current.value,
              checkedUrl: linkRef.current.value,
              checkedId: idRef.current.value,
              checkedStatus: "-1",
            })
          }
        >
          Add Uptime Check
        </Button>
      </DialogActions>
    </Dialog>
  );
}
