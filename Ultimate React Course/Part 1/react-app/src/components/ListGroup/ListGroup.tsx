import { useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListItemProps {
  active: boolean;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
