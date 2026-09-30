import data from '../data/Data'

export default function FormChange({covert,onsubmitEvent,onchangeEvent}) {

  return (
     <form className='card shadow card-width movil' onSubmit={onsubmitEvent}>
            <div className='card-header  text-center py-3'>
              <p className='card-title mb-0 fw-bold h4' >
                Money Exchange Rate
              </p>
            </div>
            <div className='card-body'>
              <div className='row g-3'>
                <div className='col-12 col-md-6'>
                  <label htmlFor="txtcurrent" className="form-label fw-bold">Current</label>
                  <select id="txtcurrent" name='current' className="form-select form-select-lg mb-3" aria-label="Large select example" onChange={onchangeEvent} value={covert.current}>
                    {
                        data.map((item) => (
                            <option 
                            name='current'
                            key={item.value}
                            value={item.value}>{item.label}</option>
                        ))
                    }
                  </select>
                </div>
                <div className='col-12 col-md-6'>
                  <label htmlFor="txtchange" className="form-label fw-bold">To Change</label>
                  <select id="txtchange" name='change'  className="form-select form-select-lg mb-3" aria-label="Large select example"  value={covert.change} onChange={onchangeEvent}>
                      {
                        data.map((item) => (
                            <option 
                            name='change'
                            key={item.value}
                            value={item.value}>{item.label}</option>
                        ))
                    }
                  </select>
                </div>
                <div className='col-12'>
                  <div className="form-floating">
                    <input 
                    value={covert.amount}
                    onChange={onchangeEvent}
                    name="amount"
                    type="number" 
                    className="form-control" 
                    id="txtAmount" 
                    placeholder="Amount" required title='only number allow' pattern='^[0-9]*$'min="1" />
                    <label htmlFor="txtAmount">Amount</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-footer text-end d-grid d-sm-inline '>
              <button type='submit' className={`btn btn-lg btn-outline-primary ${covert.loading && "disabled"}`}>Convert</button>
            </div>
        </form>
  )
}
