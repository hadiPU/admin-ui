import React from "react";

function Input(props) {
  const {
    id,
    backgroundColor = "",
    border = "",
    ...rest
  } = props;

  return (
    <input
      id={id}
      className={`
        py-3
        pl-4
        text-sm
        rounded-md
        w-full
        border

        ${backgroundColor}
        ${border}

        bg-white
        dark:bg-gray-800

        text-gray-900
        dark:text-white

        placeholder:text-gray-400
        dark:placeholder:text-gray-400

        border-gray-300
        dark:border-gray-600

        focus:outline-none
        focus:ring-0
        focus:border-primary
      `}
      {...rest}
    />
  );
}

export default Input;