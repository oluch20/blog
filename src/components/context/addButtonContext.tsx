"use client";

import { createContext, useContext, useState } from "react";

export type AddButtonContextType = { on: boolean; toggle: () => void };

export const AddButtonContext = createContext<AddButtonContextType | undefined>(undefined);

export function AddButtonProvider({ children, initial = false }: { children: React.ReactNode; initial?: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <AddButtonContext.Provider value={{ on, toggle: () => setOn((b) => !b) }}>{children}</AddButtonContext.Provider>
  );
}

export function useAddButton() {
  const ctx = useContext(AddButtonContext);
  if (!ctx) throw new Error("useAddButton must be used inside AddButtonProvider");
  return ctx;
}