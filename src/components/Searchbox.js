import React from "react";
import "./Searchbox.css";



const Searchbox = ({searchChange }) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue br3"
            type="search"
            placeholder="Search Robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default Searchbox;