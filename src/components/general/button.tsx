import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  link?: string;
}

const Button = ({ onClick, className, children, link }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} hover:bg-gray-700 bg-gray-500 text-white font-bold py-2 px-4 rounded`}
    >
      {link ? <Link to={link}>{children}</Link> : <div>{children}</div>}
    </button>
  );
};

export default Button;
