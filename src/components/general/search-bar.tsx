interface SearchBarProps {
  placeholder?: string;
}
const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <input
      type="text"
      className="border border-gray-200 shadow-md rounded-md p-2 w-full max-w-[25rem] focus:outline-none "
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
