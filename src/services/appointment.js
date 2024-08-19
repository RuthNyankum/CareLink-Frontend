import { apiClient } from './config';

// POST: Create a new appointment
export const apiCreateAppointment = async (payload) => {
  return apiClient.post('/appointment', payload);
};

// GET: Retrieve all appointments
export const apiGetAppointments = async () => {
  return apiClient.get('/appointment');
};

// GET: Retrieve a single appointment by ID
export const apiGetAppointmentById = async (id) => {
  return apiClient.get(`/appointment/${id}`);
};

// PATCH: Update an appointment by ID
export const apiUpdateAppointment = async (id, payload) => {
  return apiClient.patch(`/appointment/${id}`, payload);
};

// DELETE: Delete an appointment by ID
export const apiDeleteAppointment = async (id) => {
  return apiClient.delete(`/appointment/${id}`);
};
