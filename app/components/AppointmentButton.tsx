"use client";

import { ReactNode } from "react";
import { useAppointment } from "./AppointmentProvider";

type AppointmentButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function AppointmentButton({
  children,
  className = "",
}: AppointmentButtonProps) {
  const { openModal } = useAppointment();

  return (
    <button
      type="button"
      onClick={openModal}
      className={className}
    >
      {children}
    </button>
  );
}