interface InputProps {
  type?: string;
  classname?: string;
  placeholder?: string;
}
const Input = ({ type, classname, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      className={`border border-gray-300 shadow-md p-2   ${classname}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
