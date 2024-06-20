import React from 'react';

const Dados = ({ dados }) => {
  if (dados == null) {
    return (
      <div className="min-h-[85px] grid max-[400px]:min-h-[60px]">
        <p className="mx-auto text-center text-xl text-[#ABABAB] max-w-[25ch] place-self-center max-[400px]:text-lg">
          Saiba agora se está no seu peso ideal!
        </p>
      </div>
    );
  } else {
    return (
      <div className="min-h-[85px] grid max-[400px]:min-h-[60px]">
        <div className="border-b border-[#E85B81] grid grid-cols-4 text-center text-[#505050] font-semibold text-lg max-[400px]:text-sm items-center">
          <p>Peso</p>
          <p>Altura</p>
          <p>IMC</p>
          <p>Resultado</p>
        </div>

        <div className="grid grid-cols-4 items-center text-center text-lg max-[400px]:text-sm">
          <p>{dados.peso}</p>
          <p>{dados.altura}</p>
          <p>{dados.imc}</p>
          <p>{dados.resultado}</p>
        </div>
      </div>
    );
  }
};

export default Dados;
