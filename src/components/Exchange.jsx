import React from 'react'

export default function Exchange({response,onexchangeback}) {
  return (
    <div className='card card-width my-3'>
      <div className='card-header'>
        <p className='card-title mb-0 text-center fw-bold h4'>Details</p>
      </div>
      <div className='card-body'>
        <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center'>
          <p className='card-text h3 me-0 me-sm-2 mb-0'>Amount</p><p className='card-text h3'>${response.amount +" "+response.base_code}</p>
        </div>
        <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center my-3'>
          <p className='card-text h3 me-0 me-sm-2 mb-0'>Rate</p><p className='card-text h3'>${response.conversion_rate +" "+response.target_code}</p>
        </div>
        <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center '>
          <p className='card-text h3 me-0 me-sm-2 mb-0'>Result</p><p className='card-text h3'>${response.conversion_result+" "+response.target_code}</p>
        </div>
      </div>
      <div className='card-footer text-end d-grid d-sm-inline '>
        <button type='button' className="btn btn-lg btn-outline-success" onClick={onexchangeback}>New Exchange</button>
      </div>
    </div>
  )
}
