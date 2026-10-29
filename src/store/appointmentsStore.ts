import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  reason: string;
  createdAt: string;
}

interface AppointmentsState {
  appointments: Appointment[];
  addAppointment: (appt: Omit<Appointment, 'id' | 'createdAt'>) => string;
  updateAppointment: (id: string, appt: Partial<Appointment>) => void;
  removeAppointment: (id: string) => void;
  clearAppointments: () => void;
}

function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export const useAppointmentsStore = create<AppointmentsState>()(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (appt) => {
        const id = generateId();
        const newAppt: Appointment = {
          ...appt,
          id,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ appointments: [newAppt, ...state.appointments] }));
        return id;
      },
      updateAppointment: (id, appt) =>
        set((state) => ({
          appointments: state.appointments.map((a) => (a.id === id ? { ...a, ...appt } : a)),
        })),
      removeAppointment: (id) =>
        set((state) => ({
          appointments: state.appointments.filter((a) => a.id !== id),
        })),
      clearAppointments: () => set({ appointments: [] }),
    }),
    {
      name: 'appointments-storage',
    }
  )
);
