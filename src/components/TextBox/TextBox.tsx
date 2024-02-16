import { useEffect, useState } from "react";
import { TextBoxInterface } from ".";

export const TextBox = <T extends string>({
  className = "",
  name,
  onChange,
  placeholder,
  type = "text",
  value = "",
  max,
  min,
}: TextBoxInterface<T>) => {
  const [val, setVal] = useState<string>(value);

  useEffect(() => {
    setVal(value);
  }, [value]);
  return (
    <>
      <input
        type={type}
        name={name}
        min={min}
        max={max}
        autoComplete="off"
        value={val}
        placeholder={placeholder}
        className={` ${className} outline-none  ring-successLight ring-1 rounded-md py-1 w-full px-4 min-h-10 font-bold`}
        onChange={(e) => {
          setVal(e.target.value);
          onChange?.(e.target.value);
        }}
      />
    </>
  );
};
