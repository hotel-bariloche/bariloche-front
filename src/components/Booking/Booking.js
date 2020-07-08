import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Context } from '../../Context/Provider';

const range = (size, startAt = 0) =>{
    return [...Array(size).keys()].map(i => ( { value: i + startAt, label: i + startAt } ) );
}


const nights = range(14, 1)
const adults = range(4)
const children = range(4)

//const locale = require('date-fns/locale/es').default
//const dateFormat = locale.formatLong.date({ width: 'short' })

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { state } = React.useContext(Context);  
  return (
    <form
      action="https://reservations.travelclick.com/106660"
      method="get" 
      class="form-search form-search-position accomodation"
    >        
     <input type="hidden" name="LanguageID" value={state.language == 'english'? 1 : 2} />
     <input type="hidden" name="Rooms" value={1} /> 
      <div className="container">
        <div className="row">
          <div className="col-lg-6 gutters-19">
            <div className="form-group">
              <label>{state.texts[state.language].booking.date_label}</label>
              <DatePicker
                name="DateIn"
                //dateFormat={dateFormat}
                //locale={locale}
                selected={startDate}
                minDate={new Date()}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>
          <div className="col-lg-6 gutters-19">
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <div className="form-select-custom">
                    <label>{state.texts[state.language].booking.nights_label}</label>
                    <Select options={nights} name="Length" defaultValue={nights.filter(option => option.label === 1)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm gutters-19">
            <div className="form-group">
              <div className="form-select-custom">
                <label>{state.texts[state.language].booking.adults_label}</label>
                <Select options={adults} name="Adults" defaultValue={adults.filter(option => option.label === 1)} />
              </div>
            </div>
          </div>
          <div className="col-sm gutters-19">
            <div className="form-group">
              <label>{state.texts[state.language].booking.children_label}</label>
              <div className="form-select-custom">
                <Select options={children} name="Children" defaultValue={children.filter(option => option.label === 0)} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 gutters-19">
            <div className="form-group" style={{ paddingTop: '2rem' }}>
              <button className="button button-form" type="submit">
                {state.texts[state.language].booking.check_button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Booking
