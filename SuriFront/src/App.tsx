import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import { CssBaseline, Typography, Box, Paper, Button } from "@mui/material";

const ReservationsPage: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 600,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sistema de Reservas
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleLogout}
          sx={{ marginBottom: 2 }}
        >
          Cerrar Sesión
        </Button>
        <ReservationForm onSuccess={() => setRefresh(!refresh)} />
        <ReservationList key={refresh ? "1" : "0"} />
      </Paper>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/reservations" element={<ReservationsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
