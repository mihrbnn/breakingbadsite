
import "./style/home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  const [q, setQ] = useState(urlParams.get("q"));
  console.log(urlParams.get("q"));

  function formHandler(event) {
    event.preventDefault();
    setQ(event.target.q.value);
    navigate(`/search?q=${event.target.q.value}`);
  }

  return (
    <div id="home-body">
      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={formHandler} className="col-md-3 form-inline">
          <input
            className="form-control mr-sm-2 bg-transparent text-white d-flex justify-content-center col-md-6"
            type="search"
            placeholder="say my name"
            aria-label="Search"
            name="q"
          />
          <button
            className="btn btn-outline-warning text-white my-2 my-sm-3 order-sm-first col-md-6 offset-3"
            type="submit"
          >
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
