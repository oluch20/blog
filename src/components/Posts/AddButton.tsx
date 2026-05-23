"use client";
import { useContext } from "react";
import { AddButtonContext } from "../context/addButtonContext";
import { cn } from "@/lib/utils";

type AddButtonProps = {
  className?: string;
};

export function useAddButton() {
  const ctx = useContext(AddButtonContext);
  if (!ctx) throw new Error("useAddButton must be used inside AddButtonProvider");
  return ctx;
}

export function AddButton({ className }: AddButtonProps) {
  const { on, toggle } = useAddButton();

  return (
    <button className={cn("", className)}type="button" onClick={toggle}>
      dodaj post
    </button>
  );
}

