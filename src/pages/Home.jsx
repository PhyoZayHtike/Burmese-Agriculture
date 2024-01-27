import React from "react";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Card from "../components/Card";

const Home = ({ datas, loading, error }) => {
  return (
    <>
    {error && <Error error={error}/>}
    {loading && <Spinner />}
    {!error && !loading && <Card datas={datas}/>}
    </>
  );
};

export default Home;
