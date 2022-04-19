import "./styles.css";

import { useState } from "react";

const Map = ({ item, del, id1, tt, key }) => {
  const [line, setLine] = useState(false);
  const [due, setDue] = useState(false);
  const [date1, setDate1] = useState("");

  const tick = () => {
    setLine(!line);
  };
  var dd = new Date(date1);
  var tt1 = new Date(item.tata3);
  var tdate = tt1 - dd;

  const date = (e) => {
    setDate1(e.target.value);
  };
  const fire = () => {
    0 > tdate ? setDue(true) : setDue(false);
  };
  const dcap = () => {
    0 > tdate ? setDue(true) : setDue(false);
  };
  const on = () => {
    0 > tdate ? setDue(true) : setDue(false);
  };
  return (
    <>
      <tr
        key={key}
        className={due ? "bo" : ""}
        style={{ textDecoration: line ? "line-through" : "none" }}
      >
        <th scope="row">{tt + 1}</th>
        <td>
          {item.tata1}
          <br /> <span>{due ? "due date passed" : " "}</span>
        </td>
        <td>{item.tata2}</td>
        <td>
          <input
            onFocusCapture={fire}
            onChange={date}
            onClickCapture={dcap}
            onClick={on}
            type="date"
          />
        </td>
        <td>{item.tata3}</td>

        <td>
          <input
            onChange={() => tick(id1)}
            class="form-check-input"
            type="checkbox"
          />
        </td>
        <td>
          <button
            onClick={() => del(key)}
            type="button"
            class="btn btn-outline-warning"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default Map;
