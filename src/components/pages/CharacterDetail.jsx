import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import base_URL from "../../info";
import "./style/characterdetail.css";


function CharacterDetail() {
  const params = useParams();
  console.log(params.characterId);

  const [char, setChar] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}/characters/${params.characterId}`)
      .then((response) => response.json())
      .then((json) => {
        setChar(json);
      });
  }, []);

  return (
    <div>
      {char.map((item, index) => (
        <div key={index} className="row col-md-4 offset-md-4 col-sm-12 mt-5">
          <div className="col mb-4">
            <div id="card" className="card h-100 text-center border-3">
              <img className="card-img-top rounded-4 border-2" src={item.img} alt="Card cap" />
              <div className="card-body text-white">
                <h4 className="card-title pt-3">{item.name}</h4>
                <p className="card-text">
                  {item.portrayed} as {item.name}
                </p>
              </div>
              <div className="card-body ps-0">
                <table className="table table-borderless">
                  <tbody className="mt-3 text-white">
                    <tr>
                      <th scope="row">Birthday</th>
                      <td>{item.birthday}</td>
                    </tr>
                    <tr>
                      <th scope="row">Aliases</th>
                      <td>{item.nickname}</td>
                    </tr>
                    <tr>
                      <th scope="row">Occupation</th>
                      <td> {item.occupation.map(item => <p> {item} </p> )} </td>
                    </tr>
                    <tr>
                      <th scope="row">Appearance Seasons</th>
                      <td>{item.appearance.map((item, index) => ((index ? '-' : '') + item ))}</td>
                    </tr>
                    <tr>
                      <th scope="row">Status</th>
                      <td>{item.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterDetail;


