"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AppointmentContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const AppointmentContext =
  createContext<AppointmentContextType | null>(null);

export function AppointmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    // Medimos la intención de solicitar una cita.
    window.gtag?.("event", "appointment_open", {
      event_category: "engagement",
      event_label: "Formulario de cita",
    });

    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        open,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error(
      "useAppointment must be used inside AppointmentProvider"
    );
  }

  return context;
}