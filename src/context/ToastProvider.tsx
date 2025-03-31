"use client";

import { createContext, useContext, useEffect, useState } from "react";

import Toast from "@/components/ui/Toast/Toast";
import { ToastProps } from "@/components/ui/Toast/Toast";

const ToastContext = createContext({});

export function ToastContextProvider({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<ToastProps['toast']>(null);

  useEffect(() => {
    if (toast) setOpen(true);
  }, [toast]);

  return (
    // eslint-disable-next-line
    <ToastContext.Provider value={{ setToast }}>
      <Toast open={open} setOpen={setOpen} toast={toast} setToast={setToast} />
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => useContext(ToastContext);