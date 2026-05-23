"use client";

import { useAddButton } from "./AddButton";

const Category = [
  "Aktualności",
  "Sport",
  "Kultura",
  "Nauka",
  "Technologia",
  "Rozrywka",
];

export default function AddPanel() {
  const { on, toggle } = useAddButton();
  if (!on) return null;
  return (
    <div className="bg-black/50 fixed inset-0 z-10 flex items-center justify-center">
      <div className="w-11/12 max-w-3xl h-[70vh] bg-slate-700 rounded-2xl flex flex-col relative p-6">
        <button
          type="button"
          onClick={toggle}
          className="flex right-5 top-3 absolute text-2xl text-black/75 bg-red-500 cursor-pointer hover:bg-red-700 active:bg-red-800 rounded-full w-10 h-10 items-center justify-center"
        >
          x
        </button>
        <div className="text-3xl text-slate-300 mt-2">Panel dodawania postów</div>
        <div className="flex-1 mt-4 bg-slate-600 rounded-xl p-4 flex flex-col gap-4 overflow-auto">
          <div className="bg-slate-600 w-full rounded-xl p-4">
            <label className="block text-slate-300 text-lg mb-2">Tytuł</label>
            <input
              type="text"
              className="w-full rounded-2xl p-2 text-lg text-slate-900 bg-slate-500"
              placeholder="wpisz tytuł posta"
            />
          </div>

          <div className="bg-slate-600 w-full rounded-xl p-4">
            <label className="block text-slate-300 text-lg mb-2">Kategoria</label>
            <select className="w-full rounded-2xl p-2 text-lg text-slate-900 bg-slate-500">
              {Category.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-slate-600 w-full rounded-xl p-4 flex-1 flex flex-col">
            <label className="block text-slate-300 text-lg mb-2">Treść</label>
            <textarea
              className="w-full h-full resize-none rounded-2xl p-3 text-base text-slate-900 bg-slate-500"
              placeholder="wpisz treść posta"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={toggle}
            className="px-4 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
          >
            Anuluj
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Dodaj post
          </button>
        </div>
      </div>
    </div>
  );
}
