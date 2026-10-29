import { useAppointmentsStore } from '../store/appointmentsStore';
import { useCallback } from 'react';

export function useAppointments() {
  const { appointments, addAppointment, updateAppointment, removeAppointment, clearAppointments } = useAppointmentsStore();

  const createAppointment = useCallback(
    (appt: { name: string; email: string; phone?: string; date: string; time: string; reason: string }) => {
      return addAppointment(appt);
    },
    [addAppointment]
  );

  const getGoogleCalendarUrl = useCallback((appt: { name: string; email: string; date: string; time: string; reason: string }) => {
    // Create a Google Calendar event URL (basic)
    const title = encodeURIComponent(`Meeting with Amlan Sengupta - ${appt.reason}`);
    const details = encodeURIComponent(`Name: ${appt.name}\nEmail: ${appt.email}\nReason: ${appt.reason}`);
    // Try to format date/time - use as provided
    const start = encodeURIComponent(`${appt.date}T${appt.time}:00`);
    const end = encodeURIComponent(`${appt.date}T${appt.time}:00`); // same time as placeholder; user can adjust
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${start}/${end}`;
  }, []);

  return {
    appointments,
    createAppointment,
    updateAppointment,
    removeAppointment,
    clearAppointments,
    getGoogleCalendarUrl,
  };
}
