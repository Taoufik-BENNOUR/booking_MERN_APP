import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format } from 'date-fns';
import {useNavigate} from "react-router-dom"

import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
const Header = ({type}) => {

  const {user} = useContext(AuthContext)

  const [destination, setdestination] = useState("")  
  const [dates, setdate] = useState([{
    startDate: new Date(),
    endDate:  new Date(),
    key: 'selection'
  }])
  const [OpenDate, setOpenDate] = useState(false)
  const [options, setoptions] = useState({
    adult:1,
    children:0,
    roomNumber:1
  })
  const [OpenOptions, setOpenOptions] = useState(false)
  const navigate = useNavigate()
  const handleOption = (name,operation) =>{
    setoptions(prev=>{return {
      ...prev,[name]:operation === "i" ? options[name] + 1 : options[name] - 1
    }})
  }
  const {dispatch} = useContext(SearchContext)
  const handleSearch = () =>{
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
    destination && navigate("/hotels",{state:{destination,dates,options}})
  }
  return (
    <div className="header">
      <div className={type ==="list" ?"headerContainer listMode":  "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
        { type !=="list" && <> <h1 className="headerTitle"> hello everybody</h1>
        <p className="headerDescription">lorem</p>
    {!user &&    <button className="headerBtn">Sign In / Register</button>}
        <div className="headerSearch">
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input onChange={(e)=>setdestination(e.target.value)} type="text" placeholder="destination" className="headerSearchInput" required/>
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={()=>setOpenDate(!OpenDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")}`} to {`${format(date[0].endDate,"dd/MM/yyyy")}`}  </span>
              {OpenDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setdate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />}
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={()=>setOpenOptions(!OpenOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.roomNumber} room` }</span>
                {OpenOptions && <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optioncounter">
                    <button className="optionCounterButton" onClick={()=>handleOption("adult","d")} disabled={options.adult<=0} >-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">children</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption("children","d")} disabled={options.children<=0}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" onClick={()=>handleOption("roomNumber","d")} disabled={options.roomNumber<=0}>-</button>
                    <span className="optionCounterNumber">{options.roomNumber}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("roomNumber","i")}>+</button>
                    </div>
                  </div>
                </div>}
          </div>
          <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>search</button>
          </div>
      
        </div>  </> }
      </div>
    </div>
  );
};

export default Header;
