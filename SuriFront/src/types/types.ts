export interface Service {
    id: number;
    name: string;
  }
  
  export interface Reservation {
    id?: number;
    clientName: string;
    dateReservation: string;
    serviceId: number;
  }
  