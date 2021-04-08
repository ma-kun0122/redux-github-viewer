import React from "react";

function TabsContainer() {
  return (
    <>
      <ul role="tablist">
        <li role="presentation">
          <button
          // role="tab"
          // aria-controls="panel1"
          // aria-selected={state.tab === "panel1"}
          // onClick={handleClick}
          >
            Tab1
          </button>
        </li>
        <li role="presentation">
          <button
          // role="tab"
          // aria-controls="panel2"
          // aria-selected={state.tab === "panel2"}
          // onClick={handleClick}
          >
            Tab2
          </button>
        </li>
      </ul>
    </>
  );
}

export default TabsContainer;
