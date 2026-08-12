"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type AppointmentContextType = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const AppointmentContext = createContext<AppointmentContextType | null>(null);

export function AppointmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

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