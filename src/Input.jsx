import React from 'react';

const Input = ({ label, placeholder, handleInput }) => {
  return (
    <>
      <label
        htmlFor={label}
        className="text-[#505050] font-semibold text-lg max-[400px]:text-sm"
      >
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </label>
      <input
        onInput={handleInput}
        type="number"
        id={label}
        placeholder={placeholder}
        className="border border-solid border-[#E85B81] rounded-md py-2 px-4 max-[400px]:text-sm"
      />
    </>
  );
};

export default Input;
