import React, { useState } from "react";
import { createReservation } from "../api/api";
import ServiceList from "./ServiceList";
import { Button, Container, TextField, Typography, Box, Alert } from "@mui/material";

const ReservationForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [clientName, setClientName] = useState("");
  const [dateReservation, setDateReservation] = useState("");
  const [serviceId, setServiceId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!clientName || !dateReservation || !serviceId) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      await createReservation(clientName, serviceId, dateReservation);
      onSuccess();
      setClientName("");
      setDateReservation("");
      setServiceId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Crear Reserva
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Nombre del Cliente"
          variant="outlined"
          fullWidth
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <TextField
          label="Fecha y Hora"
          type="datetime-local"
          fullWidth
          value={dateReservation}
          onChange={(e) => setDateReservation(e.target.value)}
        />
      <ServiceList selectedService={serviceId} onSelect={setServiceId} />
        <Button type="submit" variant="contained" color="secondary">
          Reservar
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
    </Container>
  );
};

export default ReservationForm;
