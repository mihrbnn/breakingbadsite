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
    <>
      {char.map((item, index) => (
        <div key={index} className="row mt-5">
          <div className="col d-flex justify-content-center mb-4">
            <div className="flip-card" tabIndex="0">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="card-img-top rounded-4 border-2"
                    src={item.img}
                    alt="Card cap"
                  />
                </div>
                <div className="flip-card-back">
                  <div className="card-body mt-3 text-center">
                    <h5 className="card-title mb-2 pb-3">
                      {item.name}{" "}
                      <span className="text-secondary fs-6 text-light">
                        {" "}
                        <br />({item.portrayed})
                      </span>
                    </h5>
                    <div>
                      <h5 className="card-text">Aliases</h5>
                      <p>{item.nickname}</p>
                    </div>
                    <div>
                      <h5 className="card-text">Birthday</h5>
                      <p>{item.birthday}</p>
                    </div>
                    <div>
                      <h5 className="card-text">Occupation</h5>
                      <p>
                        {item.occupation.map((item, index) => (
                          <p className="m-0" key={index}>
                            {item}
                          </p>
                        ))}
                      </p>
                    </div>
                    <div>
                      <h5 className="card-text">Appearance Seasons</h5>
                      <p>
                        {item.appearance.map(
                          (item, index) => (index ? "-" : "") + item
                        )}
                      </p>
                    </div>
                    <div>
                      <h5 className="card-text">Status</h5>
                      <p>{item.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CharacterDetail;
