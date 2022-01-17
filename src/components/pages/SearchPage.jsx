import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import base_URL from "../../info";
import "./style/searchpage.css";

function SearchPage() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get("q"));
  console.log(urlParams.get("q"));

  const [char, setChar] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}/characters?limit=30`)
      .then((response) => response.json())
      .then((json) => {
        setChar(json);
      });
  }, []);

  function formHandler(event) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?q=${event.target.q.value}`);
  }
  const searchName = location.search.split("?q=")[1];
  const searchItems = char.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName) ||
      item.nickname.toLowerCase().includes(searchName)
  );
  return (
    <>
      <div
        id="search-container"
        className="container d-flex justify-content-center align-items-center"
      >
        <form className="col-md-3" onSubmit={formHandler}>
          <div className="mb-3">
            <input
              defaultValue={q}
              name="q"
              type="text"
              className="form-control d-flex justify-content-center col-md-6"
              placeholder="say my name"
            />
          </div>
          <div className="">
            <button
              id="search-btn"
              type="submit"
              className="btn btn-primary col-md-6 offset-3"
            >
              Run
            </button>
          </div>
        </form>
      </div>
      {searchItems.map((item, index) => (
        <div
          key={index}
          className="card col-md-6 offset-md-3 col-sm-12 mb-5 border-2"
          id="card"
        >
          <div className="row g-0" id="card-context">
            <div className="col-md-5 d-flex" id="image-box">
              <img
                src={item.img}
                className="img-fluid rounded-start rounded-1 border-2 ms-4 my-4"
                alt="character image"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body mt-5 text-center">
                <h5 className="card-title mb-3 pb-3">
                  {item.name}{" "}
                  <span className="text-secondary fs-6">
                    {" "}
                    <br />({item.portrayed})
                  </span>
                </h5>
                <div>
                  <h6 className="card-text">Aliases</h6>
                  <p>{item.nickname}</p>
                </div>
                <div>
                  <h6 className="card-text">Birthday</h6>
                  <p>{item.birthday}</p>
                </div>
                <div>
                  <h6 className="card-text">Occupation</h6>
                  <p>
                    {item.occupation.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default SearchPage;
