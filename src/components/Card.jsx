import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

const Card = ({ datas }) => {
  const [cardDatas, setCardData] = useState([]);
  const [currentPage,setCurrentPage] = useState(0)
  const perPage = 8
  useEffect(() => {
    setCardData(datas);
  }, [datas]);
  const handlePageClick = (selectedPage) => {
      setCurrentPage(selectedPage.selected)
  }

  const offset = currentPage * perPage;
  const currentPageData = cardDatas.slice(offset, offset + perPage);

  return (
    <div>
      <div className="mt-7">
      <ReactPaginate 
       pageCount={Math.ceil(cardDatas.length / perPage)}
       onPageChange={handlePageClick}
       containerClassName={"pagination flex justify-center "}
       previousLabel={<span className="px-3 py-1 text-black rounded-md mr-2"><FontAwesomeIcon icon={faAngleLeft} /></span>}
       nextLabel={<span className="px-3 py-1 text-black rounded-md ml-2"><FontAwesomeIcon icon={faAngleRight} /></span>}
       breakLabel={<span className="px-3 py-1 text-black rounded-md mx-1">...</span>}
       activeClassName={"text-black bg-green-500 rounded-full"}
       pageClassName={"mx-1"}
       pageLinkClassName={"px-3 py-1 text-black rounded-full hover:bg-green-500 text-lg"}
       breakClassName={"mx-1"}
       previousClassName={"mx-1"}
       nextClassName={"mx-1"}
        />
      </div>
        <div className="py-6 flex justify-center flex-wrap">
      {currentPageData.map((data) => {
        return (
          <div className="mx-auto" key={data.Id}>
            <div className="bg-white w-96 md:w-72 shadow-md rounded m-3">
              <div className="h-64 w-full">
                <img
                  className="w-full h-full object-cover rounded-t"
                  src={`/img/${data.Id}.jpg`}
                  alt={data.Title}
                />
              </div>
              <div className="w-full h-full px-4 py-6">
                <p className="text-gray-500"><span className="text-green-500 mr-2"><FontAwesomeIcon icon={faUser} /></span>By <span>{data.Author}</span></p>
                 <p className="text-gray-500 mt-1"><span className="text-green-500 mr-2"><FontAwesomeIcon icon={faCalendar} /></span>{new Date(data.Date).toLocaleDateString()}</p>
                <h1 className="text-gray-700 mb-5 mt-3">
                  <span className="text-lg font-semibold uppercase tracking-wide">
                  {data.Title}
                  </span>
                </h1>
                <Link className="text-green-500 hover:bg-gray-300 font-medium text-lg border-2 rounded-2xl px-3 py-2" to={`/detail/${data.Id}`}>Read More<span className="text-green-500 ml-2"><FontAwesomeIcon icon={faAngleDoubleRight} /></span></Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Card;
