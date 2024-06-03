/* eslint-disable no-alert */
import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import AppRoutes from "navigation/appRoutes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>("Admin@gmail.com");
  const [password, setPassword] = useState<string>("Smart@123");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "Admin@gmail.com" && password === "Smart@123") {
      navigate(AppRoutes.dashboard);
      setError(null);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box noValidate component="form" sx={{ mt: 1 }} onSubmit={handleLogin}>
          <TextField
            autoFocus
            fullWidth
            required
            autoComplete="email"
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            id="password"
            label="Password"
            margin="normal"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            variant="contained"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
