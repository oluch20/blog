"use client";

import { useAddButton } from "./AddButton";

export default function AddPanel() {
  const { on, toggle } = useAddButton();

  if (!on) return null;

  return (
    <div className="bg-black/50 absolute w-screen h-screen top-0 left-0 z-10 flex flex-col items-center justify-center">
      <div className="w-2/5 h-3/5 bg-slate-700 rounded-2xl flex flex-col items-center relative">
        <button
          type="button"
          onClick={toggle}
          className="flex right-5 top-3 absolute text-2xl text-black/75 bg-red-500 cursor-pointer hover:bg-red-700 active:bg-red-800 rounded-full w-10 h-10 items-center justify-center"
        >
          x
        </button>
        <div className="text-2xl text-slate-300 mt-10">Panel dodawania postów</div>
        <div className="text-slate-300 mt-5">tytuł postu</div>
          
      </div>
    </div>
  );
}