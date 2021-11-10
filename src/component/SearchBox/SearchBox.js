import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
  return (
    <div className="SearchBox__OuterDivRecent">
      <p className="SearchBox__textRecently">
        <b>{props.text}</b>
      </p>
      <i class="fas fa-chevron-circle-down SearchBoxrecentIcon"></i>
    </div>
  );
};

export default SearchBox;
