import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Detail from './pages/Detail'

const App = () => {
  const [datas,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const fetchData = async() => {
    try{
      setLoading(true)
      const response = await fetch('../public/BurmeseAgriculture.json')
      if(!response){
         throw new Error('Data Not Found')
      }
      const data = await response.json()
      setData(data)
      setLoading(false)
    }catch(error){
        console.log(error);
        setError('Network Error')
        setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home datas={datas} loading={loading} error={error}/>} />
      <Route path='/detail/:id' element={<Detail datas={datas} loading={loading} error={error}/>} />
    </Routes>
    </>
  )
}

export default App