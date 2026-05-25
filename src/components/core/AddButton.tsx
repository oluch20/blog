"use client";
import { useContext } from "react";
import { AddButtonContext } from "../context/AddButtonContext";
import { cn } from "@/lib/utils";
import { MyButton } from "./MyButton";

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
    <MyButton className={cn("", className)} onClick={toggle}>
      dodaj post
    </MyButton>
  );
}

