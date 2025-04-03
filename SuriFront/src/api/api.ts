const API_URL = import.meta.env.VITE_API_URL;

const getAuthToken = () => localStorage.getItem("token");

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Error en la solicitud");
  }
  return response.json();
};

export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await handleResponse(response);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
}

export async function getServices() {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("No autorizado");
    const response = await fetch(`${API_URL}/services`,{
      headers: { "Authorization": `Bearer ${token}` },
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("Error en getServices:", error);
    throw error;
  }
}

export async function getReservations() {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("No autorizado");

    const response = await fetch(`${API_URL}/reservations`, {
      headers: { "Authorization": `Bearer ${token}` },
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Error en getReservations:", error);
    throw error;
  }
}

export async function createReservation(clientName: string, serviceId: number, dateReservation: string) {
  try {
    const token = getAuthToken();
    if (!token) throw new Error("No autorizado");
    console.log("Nombre del cliente:", clientName);

    const response = await fetch(`${API_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        clientName,  
        serviceId,  
        dateReservation: new Date(dateReservation).toISOString() // Convertir fecha a ISO
      }),
    });

    if (response.status === 409) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    return await handleResponse(response);
  } catch (error) {
    console.error("Error en createReservation:", error);
    throw error;
  }
}

export async function register(username: string, email: string, password: string) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("Error en register:", error);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
