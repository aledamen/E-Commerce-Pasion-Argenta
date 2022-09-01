import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function ReviewRating() {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const  {user}  = useSelector((state) => state);
  const [rating, setRating] = useState({});
  const {id} = useParams()
    const userId = user._id
  const handleClickOpen = () => {
    setOpen(true);
  };

  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const ratingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSend = () => {
    axios
      .put("/api/products/review", { id: { id }, review: { review: {comment},userId:{userId},rating:{rating}} })
      .then((res) => console.log(res))
      
  };

  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Deja tu comentario del producto
      </Button>
      <Dialog open={open} onClose={handleSend} maxWidth="md" fullWidth={true}>
        <DialogTitle>Cometarios</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dejanos tu comentario del producto
          </DialogContentText>
          <TextField
            onChange={commentChange}
            autoFocus
            margin="dense"
            id="name"
            label="comentario"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <Typography component="legend">Clasificación del producto</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={ratingChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSend}>enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
