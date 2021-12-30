import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import base_URL from "../../info";


function Quotes() {
  const params = useParams();
  console.log(params);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch(`${base_URL}/quotes`)
      .then((response) => response.json())
      .then((json) => {
        setQuote(json);
        console.log(json);
      });
  }, []);

  const [char, setChar] = useState([]);

  return quote.map((item, index) => (
    <div id="quotepage">
        <div class="card col-md-6 col-sm-12 offset-md-3 mb-5 border-5 mt-5 bg-light">
          <div class="card-body pb-3 mt-2 ">
            <p class="card-title ps-3 pt-2">{item.quote}</p>
          </div>
          <div class="card-body pt-0 d-flex justify-content-end me-3">
            <h6 class="card-title font-monospace fw-bold">{item.author}</h6>
          </div>
        </div>
    </div>
  ));
}

export default Quotes;
