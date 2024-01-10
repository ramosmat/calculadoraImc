"use client";

import Dados from "../components/dados";
import Inputs from "../components/input";
import { useState, useEffect } from "react";

export default function Home() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState<number>(0);
  let res = "";

  const handleSubmmit = () => {
    setImc(Number((peso / Math.pow(altura, 2)).toFixed(2)));
  };

  return (
    <section className="py-20 px-28 w-10/12 max-w-3xl h-[700px] rounded-xl flex flex-col items-center bg-white">
      <div className="w-96">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>Peso</label>
            <input
              type="number"
              placeholder="kg"
              onChange={(event) => setPeso(Number(event.currentTarget.value))}
              className="border border-[#E85B81] rounded-md h-10 px-5 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Altura</label>
            <input
              type="number"
              placeholder="m"
              onChange={(event) => setAltura(Number(event.currentTarget.value))}
              className="border border-[#E85B81] rounded-md h-10 px-5 outline-none"
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmmit}
        className="mt-6 h-10 hover:bg-[#E85B81] bg-[#f02d61] w-96 rounded-xl text-white"
      >
        Calcular
      </button>

      <section id="root" className="mt-10">
        {/* Se imc maior que 0, faça o primeiro paragrafo */}
        {imc > 0 ? (
          <Dados peso={peso} altura={altura} imc={imc} res={res} />
        ) : (
          "Saiba agora se está no seu peso ideal!"
        )}
      </section>
    </section>
  );
}
