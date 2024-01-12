"use client";

import Dados from "../components/dados";
import { useState, useEffect } from "react";
import Linha from "../components/linha";

export default function Home() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState<number>(0);
  let res = "";

  const handleSubmmit = () => {
    setImc(Number((peso / Math.pow(altura, 2)).toFixed(2)));
  };

  return (
    <section className="py-10 md:px-28 w-10/12 max-w-3xl h-[700px] rounded-xl flex flex-col items-center bg-white">
      <div className="w-72 md:w-96">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[#505050]">Peso</label>
            <input
              type="number"
              placeholder="kg"
              onChange={(event) => setPeso(Number(event.currentTarget.value))}
              className="border border-[#E85B81] rounded-md h-10 px-5 outline-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#505050]">Altura</label>
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
        className="mt-6 h-10 hover:bg-[#E85B81] bg-[#f02d61] w-72 md:w-96 rounded-xl text-white"
      >
        Calcular
      </button>

      <section className="mt-10 w-72 md:w-96 flex justify-center">
        {/* Se imc maior que 0, faça o primeiro parenteses */}
        {imc > 0 ? (
          <Dados peso={peso} altura={altura} imc={imc} res={res} />
        ) : (
          <div className="w-60">
            <p className="text-[#ABABAB] text-xl text-center">
              Saiba agora se está no seu peso ideal!
            </p>
          </div>
        )}
      </section>

      <table className="mt-10 border border-[#c9c9c9] md:w-96">
        <thead>
          <tr className="bg-[#dfdfdf]">
            <td className="text-[#E85B81] font-semibold pl-2 md:pl-6">IMC</td>
            <td className="text-[#E85B81] font-semibold pl-2 md:pl-0">
              Classificação
            </td>
          </tr>
        </thead>
        <tbody>
          <Linha
            bg="[#FFF]"
            range={"Menos de 17"}
            classe={"Muito abaixo do peso"}
          />
          <Linha
            bg="[#dfdfdf]"
            range={"Entre 17 e 18,4"}
            classe={"Abaixo do peso"}
          />

          <Linha
            bg="[#FFF]"
            range={"Entre 18,5 e 24,9"}
            classe={"Peso normal"}
          />

          <Linha
            bg="[#dfdfdf]"
            range={"Entre 25 e 29,9"}
            classe={"Acima do peso"}
          />

          <Linha bg="[#FFF]" range={"Entre 30 e 34,9"} classe={"Obesidade I"} />

          <Linha
            bg="[#dfdfdf]"
            range={"Entre 35 e 39,9"}
            classe={"Obesidade II (severa)"}
          />

          <Linha
            bg="[#FFF]"
            range={"Acima de 40"}
            classe={"Obesidade III (mórbida)"}
          />
        </tbody>
      </table>
    </section>
  );
}
