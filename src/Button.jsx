import React from 'react';

const Button = () => {
  const [text, setText] = React.useState('Calcular');
  const [dados, setDados] = React.useState(null);

  function handleClick() {
    setText('Refazer');
  }

  return (
    <button
      onClick={handleClick}
      className="text-white font-semibold py-3 bg-[#E85B81] rounded-md hover:bg-[#904E69] mt-2"
    >
      {text}
    </button>
  );
};

export default Button;
