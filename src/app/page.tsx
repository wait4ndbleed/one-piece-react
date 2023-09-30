"use client";

import { useState } from "react";
import { Personagem } from "../components/Personagem";

export default function Home() {
  const [id, setId] = useState<number>(2);

  return (
    <>
      <Personagem id={id} />

      <aside>
        <ul className="fixed virado p-[30px] md:p-5 bottom-0 md:top-0 right-0 w-full md:w-[180px] min-h-screen flex flex-row md:flex-col justify-center items-end md:items-center gap-[10px] md:bg-black/30">
          <li>
            <button
              className={`rounded-full overflow-hidden hover:shadow-[0_0_10px_#d9d9d9] ${
                id === 0 ? "scale-[1.2] shadow-[0_0_10px_#d9d9d9]" : ""
              }`}
              onClick={() => setId(0)}
            >
              <img 
                src="../assets/images/tripulacao-chopper.png" 
                alt="" 
                className="w-16 lg:w-full"
              />
            </button>
          </li>
          <li>
            <button
              className={`rounded-full overflow-hidden hover:shadow-[0_0_10px_#d9d9d9] ${
                id === 1 ? "scale-[1.2] shadow-[0_0_10px_#d9d9d9]" : ""
              }`}
              onClick={() => setId(1)}
            >
              <img 
                src="../assets/images/tripulacao-zoro.png" 
                alt="" 
                className="w-16 lg:w-full"
              />
            </button>
          </li>
          <li>
            <button
              className={`rounded-full overflow-hidden hover:shadow-[0_0_10px_#d9d9d9] ${
                id === 2 ? "scale-[1.2] shadow-[0_0_10px_#d9d9d9]" : ""
              }`}
              onClick={() => setId(2)}
            >
              <img 
                src="../assets/images/tripulacao-luffy.png" 
                alt="" 
                className="w-16 lg:w-full"
              />
            </button>
          </li>
          <li>
            <button
              className={`rounded-full overflow-hidden hover:shadow-[0_0_10px_#d9d9d9] ${
                id === 3 ? "scale-[1.2] shadow-[0_0_10px_#d9d9d9]" : ""
              }`}
              onClick={() => setId(3)}
            >
              <img 
                src="../assets/images/tripulacao-nami.png" 
                alt="" 
                className="w-16 lg:w-full"
              />
            </button>
          </li>
          <li>
            <button
              className={`rounded-full overflow-hidden hover:shadow-[0_0_10px_#d9d9d9] ${
                id === 4 ? "scale-[1.2] shadow-[0_0_10px_#d9d9d9]" : ""
              }`}
              onClick={() => setId(4)}
            >
              <img 
                src="../assets/images/tripulacao-sanji.png" 
                alt="" 
                className="w-16 lg:w-full"
              />
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
