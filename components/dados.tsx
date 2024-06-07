export default function Dados({
  peso,
  altura,
  imc,
  res,
}: {
  peso: number;
  altura: number;
  imc: number;
  res: string;
}) {
  switch (true) {
    case imc < 17:
      res = "Muito abaixo do peso";
      break;
    case imc < 18.4:
      res = "Abaixo do peso";
      break;
    case imc < 24.9:
      res = "Peso normal";
      break;
    case imc < 29.9:
      res = "Acima do peso";
      break;
    case imc < 34.9:
      res = "Obesidade I";
      break;
    case imc < 39.9:
      res = "Obesidade II (severa)";
      break;
    case imc > 40:
      res = "Obesidade III (mórbida)";
      break;
  }

  return (
    <section className="grid">
      <div className="border-b border-[#E85B81] grid grid-cols-4 text-black">
        <p>Peso</p>
        <p>Altura</p>
        <p>IMC</p>
        <p>Resultado</p>
      </div>
      <div className="grid grid-cols-4 text-black">
        <p>{peso}</p>
        <p>{altura}</p>
        <p>{imc}</p>
        <p>{res}</p>
      </div>
    </section>
  );
}
