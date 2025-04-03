import React, { useEffect, useState } from "react";
import { getReservations, getServices } from "../api/api";
import { Reservation, Service } from "../types/types";
import { Container, Typography, Paper, Card, CardContent, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const ReservationList: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getReservations().then(setReservations).catch(console.error);
    getServices().then(setServices).catch(console.error);
  }, []);

  const getServiceName = (serviceId: number) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : "Servicio desconocido";
  };

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        Listado de Reservas
      </Typography>
      {reservations.length === 0 ? (
        <Typography variant="body1" align="center">
          No hay reservas registradas.
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ padding: 2 }}>
          {reservations.map((res) => (
            <Card key={res.id} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <EventIcon color="primary" sx={{ marginRight: 1 }} />
                  <Typography variant="h6">{res.clientName}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {new Date(res.dateReservation).toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  <strong>Servicio:</strong> {getServiceName(res.serviceId)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}
    </Container>
  );
};

export default ReservationList;
