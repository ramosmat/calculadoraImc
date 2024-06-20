import React from 'react';

const Dados = ({ dados }) => {
  if (dados == null) {
    return (
      <p className="mx-auto text-center text-xl text-[#ABABAB] max-w-[25ch] place-self-center">
        Saiba agora se está no seu peso ideal!
      </p>
    );
  } else {
    return (
      <>
        <div className="border-b border-[#E85B81] grid grid-cols-4 text-center text-[#505050] font-semibold text-lg max-[400px]:text-sm">
          <p>Peso</p>
          <p>Altura</p>
          <p>IMC</p>
          <p>Resultado</p>
        </div>
        <div className="grid grid-cols-4 text-center text-lg max-[400px]:text-sm">
          <p>{dados.peso}</p>
          <p>{dados.altura}</p>
          <p>{dados.imc}</p>
          <p>{dados.resultado}</p>
        </div>
      </>
    );
  }
};

export default Dados;
