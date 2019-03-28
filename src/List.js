import React from "react";
const List = props =>
  props.items
    .filter(item => item.includes(props.search))
    .map((item, index) => (
      //  <li className="list-group-item" key={index}>
      <article key={index} className="form-inline m-2">
        <div className="form-check">
          <label className="form-check-label" id={index}>
            <input
              type="checkbox"
              id={index}
              className="form-check-input"
              onClick={e => props.onChkChange(e, "List1", index)}
            />{" "}
            {item}
          </label>
        </div>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => props.delete(index, "List1")}
        >
          Remove
        </button>
      </article>

      // </li>
    ));

export default List;
