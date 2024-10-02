import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { MdSearch } from "react-icons/md";
interface Props {
  onSearch: (search: String) => void;
}
const SearchTab = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup className="w-56">
        <InputLeftElement children={<MdSearch />}></InputLeftElement>
        <Input
          ref={ref}
          type="text"
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchTab;
