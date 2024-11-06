import * as React from 'react';
import {
  Avatar,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ResponsiveAppBar from './navbar';
import GoogleSignInButton from './google-signin';
import Divider from '@mui/material/Divider';


export default function Variants() {
  const handleSubmit = () => console.log("login");
  return (
    <>
    <div>
      <ResponsiveAppBar />
    </div>
    <Container maxWidth="xs" >
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center", userSelect:"none" }}>
          SVV Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* <TextField
          id='username'
          label="Enter username"
          fullWidth
          required
          autoFocus
          sx={{ mb: 2, mt: 3 }}
        /> */}

            <TextField
              id="username"
              label='SVV ID'
              type="username"
              name="username"
              placeholder="your username"
              autoComplete="username"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{ ariaLabel: 'username', mb: 2 }}
            />

          <TextField
            id='password'
            label="Enter password"
            fullWidth
            required
            type="password"
            sx={{ mb: 0 }}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, mb:1 }}>
            Sign In
          </Button>

          <Divider style={{userSelect:"none"}}>OR</Divider>

          <Button variant="text" fullWidth sx={{ mt: 2, mb:1 }}>
            <GoogleSignInButton/>
          </Button>
          
        </Box>
      </Paper>
    </Container>
    </>
  );
  
}