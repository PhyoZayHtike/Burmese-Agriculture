import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CardDetail = ({ datas, id }) => {
  const [detail, setDetails] = useState([]);
  const filterDetail = datas.find((data) => {
    return data.Id === id;
  });
  useEffect(() => {
    setDetails(filterDetail);
  }, [datas, id]);
  return (
    <div className="lg:ml-36 mt-12 px-7">
        <Link className="text-green-500 hover:bg-gray-300 font-medium text-lg border-2 rounded-2xl px-3 py-2" to={'/'}><span className="text-green-500 mr-1"><FontAwesomeIcon icon={faAngleDoubleLeft} /></span>Back</Link>
      <div className="mt-5">
        <img
          className="w-96 lg:w-[600px]"
          src={`/img/${detail.Id}.jpg`}
          alt={detail.Title}
        />
      </div>
      <hr className="mt-4 border"/>
      <div className="flex items-center mt-2">
        <p className="text-gray-500">
          <span className="text-green-500 mr-2">
            <FontAwesomeIcon icon={faUser} />
          </span>
          By <span>{detail.Author}</span>
        </p>
        <span className="text-gray-300 ml-5">|</span>
        <p className="text-gray-500 ml-5">
          <span className="text-green-500 mr-2">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          {new Date(detail.Date).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-4 mb-5">
        <h1 className="text-3xl font-semibold">{detail.Title}</h1>
        <p className="mt-5 text-gray-600">{detail.Content}</p>
      </div>
    </div>
  );
};

export default CardDetail;
