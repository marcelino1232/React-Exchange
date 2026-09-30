import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './App.css'

import FormChange from './components/FormChange.jsx'
import Exchange from './components/Exchange.jsx'
import ExChangeCovert from './data/ExChangeCovert.js'


function App() {

  const [response,setResponse] = useState({
    loading:false,
    amount:0,
    base_code: "",
	  target_code: "",
	  conversion_rate: 0,
	  conversion_result:0
  });

  const [covert,setConvert] = useState({
        current:"USD",
        change:"DOP",
        amount:0
    });

    const onchangeEvent = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        setConvert(prev => ({...prev,[name]:value}));
    }

    const onsubmitEvent = async(e) => {
        e.preventDefault();
        if(covert.amount > 0){
          setResponse(prev => ({...prev,loading:true}));
          const {base_code,target_code,conversion_rate,conversion_result} = await ExChangeCovert(covert);
          if(base_code != undefined)
          {
            setResponse(prev => ({
              loading:true,
              base_code: base_code,
              target_code: target_code,
              conversion_rate: conversion_rate.toFixed(2),
              conversion_result:conversion_result.toFixed(2),
              amount:covert.amount}));
          }
        }
    }
    
    const onexchangeback = (e) => {
      e.preventDefault();
      setResponse(prev => ({...prev,loading:false}));
      setConvert(prev => ({...prev,amount:0}));
    }

  return (
    <>
    <div className='position'>
      <div className=' container'>
          <p className='h1 text-white  mb-0'>Exchange</p>
      </div>
    </div>
    <div className='bg-img d-flex flex-column'>
      {!response.loading && <FormChange covert={covert} onchangeEvent={onchangeEvent} onsubmitEvent={onsubmitEvent} />}
      {response.loading && response.base_code != "" && response.base_code != undefined && <Exchange response={response} onexchangeback={onexchangeback} />}
    </div>
    </>
  )
}

export default App
