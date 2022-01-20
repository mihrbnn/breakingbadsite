import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import base_URL from "../../info";
import ReactPaginate from "react-paginate";
import "./style/pagination.css";

function Quotes() {
  const params = useParams();
  // console.log(params);
  const [quote, setQuote] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const quotesPerPage = 5;
  const pagesVisited = pageNumber * quotesPerPage;

  useEffect(() => {
    fetch(`${base_URL}/quotes`)
      .then((response) => response.json())
      .then((json) => {
        setQuote(json);
        console.log(json);
      });
  }, []);
  const pageCount = Math.floor(quote.length / quotesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div>
        {quote.slice(pagesVisited, pagesVisited + quotesPerPage).map((item) => (
          <div id="quotepage" key={item.id}>
            <div className="card col-md-6 col-sm-12 offset-md-3 mb-5 border-5 mt-5 bg-light">
              <div className="card-body pb-3 mt-2 ">
                <p className="card-title ps-3 pt-2">{item.quote}</p>
              </div>
              <div className="card-body pt-0 d-flex justify-content-end me-3">
                <h6 className="card-title font-monospace fw-bold">
                  {item.author}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"NextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive text-light"}
      />
    </>
  );
}

export { Quotes };
