import React from 'react';

const Tabela = () => {
  return (
    <div className="flex flex-col">
      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <p className="text-[#E85B81] font-bold mb-1">IMC</p>
        <p className="text-[#E85B81] font-bold mb-1">Classificação</p>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Menos de 17</li>
        <li>Muito abaixo do peso</li>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Entre 17 e 18,49</li>
        <li>Abaixo do peso</li>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Entre 18,5 e 24,99</li>
        <li>Peso normal</li>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Entre 25 e 29,99</li>
        <li>Acima do peso</li>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Entre 30 e 34,99</li>
        <li>Obesidade I</li>
      </ul>

      <ul className="flex gap-3 justify-between max-[400px]:text-sm">
        <li>Entre 35 e 39,99</li>
        <li>Obesidade II</li>
      </ul>

      <ul className="flex gap-3 justify-between items-center max-[400px]:text-sm">
        <li>Acima de 40</li>
        <li>Obesidade III</li>
      </ul>
    </div>
  );
};

export default Tabela;
