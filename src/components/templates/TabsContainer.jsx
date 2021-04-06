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
            カベルネ・ソーヴィニョン
          </button>
        </li>
        <li role="presentation">
          <button
          // role="tab"
          // aria-controls="panel2"
          // aria-selected={state.tab === "panel2"}
          // onClick={handleClick}
          >
            メルロー
          </button>
        </li>
        <li role="presentation">
          <button
          // role="tab"
          // aria-controls="panel3"
          // aria-selected={state.tab === "panel3"}
          // onClick={handleClick}
          >
            ピノ・ノワール
          </button>
        </li>
      </ul>
    </>
  );
}

export default TabsContainer;
