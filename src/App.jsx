import React from 'react';
import Input from './Input';
import Dados from './Dados';
import Tabela from './Tabela';

const App = () => {
  const [text, setText] = React.useState('Calcular');
  const [dados, setDados] = React.useState(null);
  const [peso, setPeso] = React.useState(null);
  const [altura, setAltura] = React.useState(null);
  const [imc, setImc] = React.useState(null);
  const [resultado, setResultado] = React.useState(null);

  function handlePeso(e) {
    setPeso(e.target.value);
  }

  function handleAltura(e) {
    setAltura(e.target.value);
  }

  React.useEffect(() => {
    if (peso && altura) {
      setImc(((peso / (altura * altura)) * 10000).toFixed(2));
    } else {
      setImc(null);
    }
  }, [peso, altura]);

  React.useEffect(() => {
    if (imc) {
      switch (true) {
        case imc < 17:
          setResultado('Muito abaixo do peso');
          break;
        case imc < 18.49:
          setResultado('Abaixo do peso');
          break;
        case imc < 24.99:
          setResultado('Peso normal');
          break;
        case imc < 29.99:
          setResultado('Acima do peso');
          break;
        case imc < 34.99:
          setResultado('Obesidade I');
          break;
        case imc < 39.99:
          setResultado('Obesidade II');
          break;
        case imc >= 40:
          setResultado('Obesidade III');
          break;
        default:
          setResultado('Preencha os campos');
          break;
      }
    }
  }, [imc]);

  function handleClick() {
    if (peso && altura && imc && resultado) {
      setText('Refazer');

      setDados({
        peso: peso,
        altura: altura,
        imc: imc,
        resultado: resultado,
      });
    }
  }

  return (
    <div className="flex justify-center h-screen items-center bg-slate-200 px-5">
      <div className="py-14 max-[400px]:py-2 px-5 bg-[#F3F3F3] flex flex-col gap-4 w-[450px] rounded-md max-[400px]:gap-2">
        {/* Inputs */}
        <section className="flex flex-col gap-2">
          <Input
            label="peso"
            placeholder="Insira seu peso (kg)"
            handleInput={handlePeso}
          />
          <Input
            label="altura"
            placeholder="Insira sua altura (cm)"
            handleInput={handleAltura}
          />
          <button
            onClick={handleClick}
            className="text-white font-semibold py-3 bg-[#E85B81] rounded-md hover:bg-[#904E69] mt-2 max-[400px]:text-sm max-[400px]:py-2"
          >
            {text}
          </button>
        </section>

        {/* Dados */}
        <Dados dados={dados} />

        {/* Tabela */}
        <Tabela />
      </div>
    </div>
  );
};

export default App;
