import React, { useEffect, useState } from "react";
import { getServices } from "../api/api";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

interface Service {
  id: number;
  name: string;
}

interface ServiceListProps {
  selectedService: number | null;
  onSelect: (id: number | null) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ selectedService, onSelect }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error al obtener servicios:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Seleccione un servicio</InputLabel>
      <Select
        value={selectedService ?? ""}
        onChange={(e) => onSelect(e.target.value === "" ? null : Number(e.target.value))}
        displayEmpty
      >
        <MenuItem value="">Seleccione un servicio</MenuItem>
        {services.map((service) => (
          <MenuItem key={service.id} value={service.id}>
            {service.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceList;
