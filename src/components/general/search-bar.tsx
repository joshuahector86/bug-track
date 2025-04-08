import Button from "./button";

interface SearchBarProps {
  placeholder?: string;
}
const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        className="border border-gray-200 shadow-md rounded-md p-2 w-full max-w-[25rem] focus:outline-none "
        placeholder={placeholder}
      />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;
