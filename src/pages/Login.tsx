// src/pages/Login.tsx
import { Box, Button, TextField, Paper, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
      }}
    >
      <Paper sx={{ p: 4, width: 350 }}>
        <Typography variant="h6" mb={2}>
          Admin Login
        </Typography>
        <TextField fullWidth label="Email" sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" sx={{ mb: 3 }} />
        <Button fullWidth variant="contained">
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
