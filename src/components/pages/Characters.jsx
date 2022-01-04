import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import base_URL from "../../info";
import "./style/characters.css";

function Characters() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}/characters?limit=40`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div id="body" >
    <div className="container col-sm-5 ms-5 ps-3 offset-sm-3">
      <table className="table table-hover table-borderless mt-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">NAME</th>
            <th scope="col">PORTRAYED BY</th>
          </tr>
        </thead>

        {data.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th >
                <Link
                  className="text-dark text-decoration-none text-white"
                  to={`${item.char_id}`}
                >
                  {item.char_id}
                </Link>
              </th>
              <td>
                <Link
                  className="text-dark text-decoration-none py-2 text-white"
                  to={`${item.char_id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>
                <Link
                  className="text-dark text-decoration-none py-2 text-white"
                  to={`${item.char_id}`}
                >
                  {item.portrayed}
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      </div>
      </div>
  );
}

export default Characters;

