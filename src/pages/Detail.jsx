import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from '../components/CardDetail'
import Spinner from '../components/Spinner'
import Error from '../components/Error'

const Detail = ({ datas, loading, error }) => {
  const {id} = useParams()
  return (
    <div>
    {error && <Error error={error}/>}
    {loading && <Spinner />}
    {!error && !loading && <CardDetail datas={datas} id={id}/>}
    </div>
  )
}

export default Detail