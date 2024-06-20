import React from 'react';

const Tabela = () => {
  return (
    <div className="grid grid-cols-2">
      <ul className="flex flex-col justify-center ">
        <p className="text-[#E85B81] font-bold mb-1">IMC</p>
        <li>Menos de 17</li>
        <li>Entre 17 e 18,49</li>
        <li>Entre 18,5 e 24,99</li>
        <li>Entre 25 e 29,99</li>
        <li>Entre 30 e 34,99</li>
        <li>Entre 35 e 39,99</li>
        <li>Acima de 40</li>
      </ul>

      <ul className="flex flex-col justify-center text-end ">
        <p className="text-[#E85B81] font-bold mb-1">Classificação</p>
        <li>Muito abaixo do peso</li>
        <li>Abaixo do peso</li>
        <li>Peso normal</li>
        <li>Acima do peso</li>
        <li>Obesidade I</li>
        <li>Obesidade II</li>
        <li>Obesidade III</li>
      </ul>
    </div>
  );
};

export default Tabela;
