import React, { useState } from "react";

export const Search = (props) => {
  const { searchCards } = props;
  const [search, setSearch] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchCards(search);
    }
  };

  return (
    <div className="header__selects">
      <div className="flex">
        <label>Name</label>
        <input
          type="search"
          id="name"
          className="select__name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKey}
          placeholder="Hermione"
        />
      </div>
      <button
        className="btn_search"
        onClick={() => {
          searchCards(search);
        }}
      >
        Search
      </button>
    </div>
  );
};
