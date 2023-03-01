import React, { useState } from "react";

export const SearchSchool = (props) => {
  const { searchSchool } = props;
  const [school, setSchool] = useState("");

  const handleFilter = (e) => {
    setSchool(e.target.value);
  };

  searchSchool(school);

  return (
    <div className="header__select">
      <label className="label" htmlFor="school">
        School
      </label>
      <select
        className="select__school"
        name="school"
        onChange={handleFilter}
        id="school"
      >
        <option className="option">Choose one</option>
        <option className="option" value={"Gryffindor"}>
          Griffindor
        </option>
        <option className="option" value={"Slytherin"}>
          Slytherin
        </option>
        <option className="option" value={"Ravenclaw"}>
          Ravenclaw
        </option>
        <option className="option" value="Hufflepuff">
          Hufflepuff
        </option>
      </select>
    </div>
  );
};
