import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import SearchItem from '../components/searchItem/SearchItem'
import "./list.css"
const List = () => {

  const location = useLocation()
  const [destination, setdestination] = useState(location.state.destination)
  const [date, setdate] = useState(location.state.date)
  const [options, setoptions] = useState(location.state.options)
  const [OpenDate, setOpenDate] = useState(false)

  return (
    <>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listTitle'>search</h1>
            <div className='listSearchItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className='listSearchItem'>
              <label>Check-in Date</label>
              <span  onClick={()=>setOpenDate(!OpenDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")}`} to {`${format(date[0].endDate,"dd/MM/yyyy")}`}  </span>
           {OpenDate && <DateRange 
            onChange={(item)=>setdate([item.selection])}
            ranges={date}
            minDate={new Date()}
           />}
            </div>
            <div className='listSearchItem'>
              <label>Options</label>
              <div className='listOptions'>

              <div className='listOptionItem'>
                <span className='listOptionText'>Min Price <small>per night</small> </span>
                <input className='listOptionInput' type="number" min={1}/>
              </div>
              <div className='listOptionItem'>
                <span className='listOptionText'>Max Price <small>per night</small> </span>
                <input className='listOptionInput' type="number"/>
              </div>
              <div className='listOptionItem'>
                <span className='listOptionText'>Adult</span>
                <input className='listOptionInput' type="number" placeholder={options.adult} min={1}/>
              </div>
              <div className='listOptionItem'>
                <span className='listOptionText'>Children</span>
                <input className='listOptionInput' type="number" placeholder={options.children} min={0}/>
              </div>
              <div className='listOptionItem'>
                <span className='listOptionText'>Room</span>
                <input className='listOptionInput' type="number" placeholder={options.roomNumber} min={1}/>
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </>
  )
}

export default List