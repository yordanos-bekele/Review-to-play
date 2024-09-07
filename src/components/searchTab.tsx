import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
interface Props {
  handleSearching: (search: String) => void;
}
const SearchTab = ({ handleSearching }: Props) => {
  const [search, setSearch] = useState("");
  return (
    <InputGroup className="w-56">
      <Input
        type="text"
        onChange={(event) => setSearch(event.target?.value)}
        variant="filled"
        placeholder="Search games"
      />
      <InputRightElement>
        <Button
          onClick={() => handleSearching(search)}
          rightIcon={<MdSearch />}
        ></Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchTab;
