import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  let [selectedIndex, setselectedIndex] = useState(-1);

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>
  //     </>
  //   );
  // }
  //Event Handler
  // let handleClick = (event:MouseEvent) => console.log(event );
  // Hook
  // let arr = useState(-1);
  // arr[0]//variable (selctedIndex)
  // arr[1]//updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setselectedIndex(index);
                onSelectedItem(item)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
