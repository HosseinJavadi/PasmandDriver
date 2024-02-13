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
  return (
    <>
      <input
        type={type}
        name={name}
        min={min}
        max={max}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        className={` ${className} outline-none  ring-successLight ring-1 rounded-md py-1 w-full px-4 min-h-10 font-bold`}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </>
  );
};
