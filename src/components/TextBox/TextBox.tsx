import { TextBoxInterface } from ".";

export const TextBox = <T extends string>({
  className = "",
  name,
  onChange,
}: TextBoxInterface<T>) => {
  return (
    <>
      <input
        type="text"
        name={name}
        className={` ${className} outline-none  ring-successLight ring-1 rounded-sm py-1 w-full`}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </>
  );
};
