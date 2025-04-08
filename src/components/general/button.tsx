import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  link?: string;
}

const Button = ({ onClick, className, children, link, type }: ButtonProps) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type={type}
            onClick={onClick}
            className={`${className} hover:bg-gray-700 bg-gray-500 text-white font-bold py-2 px-4 rounded`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`${className} hover:bg-gray-700 bg-gray-500 text-white font-bold py-2 px-4 rounded`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
