import "./styles.css";
import Map from "./Map";
import { useState } from "react";

const Todo = () => {
  const [id1, setId1] = useState();

  const [err, setErr] = useState("");

  const [tata, setTata] = useState({
    tata1: "",
    tata2: "",
    tata3: ""
  });
  const inp = (e) => {
    setTata({ ...tata, [e.target.name]: e.target.value });
  };
  const [wawa, setWawa] = useState([]);
  const but = () => {
    if (tata.tata1 === "" || tata.tata2 === "" || tata.tata3 === "") {
      setErr("Enter value then proceed");
    } else {
      setWawa([...wawa, tata]);
      setErr("");
    }
  };
  const del = (i) => {
    console.log(i);
    wawa.splice(i, 1);
    setWawa([...wawa]);
    setTata({
      tata1: "",
      tata2: "",
      tata3: ""
    });
    setId1(i);
  };

  return (
    <div>
      <input
        onChange={inp}
        name="tata1"
        placeholder="work title"
        type="text"
        // class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <br />
      <h1>{err}</h1>
      <input
        type="text"
        name="tata2"
        onChange={inp}
        placeholder="work description"
        // class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <br />
      <h1>{err}</h1>
      <input
        type="date"
        name="tata3"
        onChange={inp}
        placeholder="work title"
        // class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      <br />
      <h1>{err}</h1>
      <button onClick={but} type="button" class="btn btn-outline-primary">
        add in list
      </button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">work title</th>
            <th scope="col">work description</th>
            <th scope="col">date of submission</th>
            <th scope="col">date of completion</th>
            <th scope="col">check</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {wawa.map((name, i) => {
            const tt = i;
            return (
              <>
                <Map item={name} key={i} tt={tt} id1={id1} del={() => del(i)} />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Todo;
