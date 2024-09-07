import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

interface Props {
  handleOrder: (order: string) => void;
}
const SortSelector = ({ handleOrder }: Props) => {
  const sortOrder = [
    { lable: "Name", value: "name" },
    { lable: "Released date", value: "-released" },
    { lable: "Average rating", value: "-rating" },
    { lable: "Date", value: "added" },
    { lable: "Meta critic", value: "Popularity" },
  ];
  return (
    <div className="my-5">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsCaretDownFill />}>
          Order by
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              onClick={() => handleOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.lable}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
