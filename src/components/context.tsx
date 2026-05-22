"use client";

import { useState, useCallback, useMemo,createContext } from "react";

export type AddButtonContextType = { on: boolean; toggle: () => void };
export const AddButtonContext = createContext<AddButtonContextType | undefined>(undefined);

export function AddButtonProvider({ children, initial = false }: { children: React.ReactNode; initial?: boolean }) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(v => !v), []);
  const value = useMemo(() => ({ on, toggle }), [on, toggle]);
  return <AddButtonContext.Provider value={value}>{children}</AddButtonContext.Provider>;
}