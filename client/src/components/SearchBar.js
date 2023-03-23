import { React, useState, useEffect } from "react";

export default function SearchBar({
  groupList,
  setSearchDisplay,
  searchInput,
  setSearchInput,
  searchDisplay,
}) {
  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    console.log(searchInput);

    let searchResult = [];

    if (searchInput.length > 0) {
      const filterResult = groupList.filter((groupObj) => {
        // console.log(groupObj.name.match(searchInput))
        return groupObj.name.match(searchInput);
      });
      searchResult = [...filterResult];
    }
    console.log(searchResult);

    if (searchInput.length > 1) {
      setSearchDisplay([...searchResult]);
    } else {
      setSearchDisplay(groupList);
    }
  };

  // useEffect(() => {

  // }, [setSearchDisplay]);

  return (
    <div className="flex-grow-1">
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />

      {/* {searchDisplay.map((groupObj) => {
        <div>
          <p>{groupObj.name}</p>
        </div>;
      })} */}
    </div>
  );
}
