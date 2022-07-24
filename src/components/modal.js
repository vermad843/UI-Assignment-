import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import logo from "../assets/main-logo.svg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function LoginModal({ toggleModal }) {
  return (
    <Box className="modal-auth">
      <Dialog onClose={toggleModal} maxWidth={"xs"} open={true}>
        <DialogContent>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={8}>
              <div className="div-logo-image">
                <img src={logo} alt="images-logo-smoke" />
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="auth-label">Email</div>
              <input type="text" className="input-text" />
            </Grid>
            <Grid item xs={12} md={8} className="grid-pass-cont">
              <div className="auth-label">Password</div>
              <input type="text" className="input-text" />
              <div className="auth-label-forgot">Forgot Your Password?</div>
            </Grid>
            <Grid item xs={12} md={8}>
              <button className="input-button">Enter</button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
