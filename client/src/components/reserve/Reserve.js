import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import "./reserve.css"
import axios from "axios"
const Reserve = ({setopen,hotelId}) => {
  const {data,loading,error} = useFetch(`/hotels/room/${hotelId}`)
  const [selectedRooms, setselectedRooms] = useState([])
  const {dates} = useContext(SearchContext)

  const getDates = (startDate,endDate)=>{

    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start.getTime())
   let list = []
    while(date <=end)
    {
      list.push(new Date(date))
      date.setDate(date.getDate()+1)  
    }
    return list
  }
const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate)

const isAvailable = (roomNumber) =>{
  const isFound = roomNumber.unavailableDates.some(date=>
    allDates.includes(new Date(date.getTime())))
    return !isFound
}

  const handleSelect = (e) =>{
    e.preventDefault()
    const checked = e.target.checked
    const value = e.target.value
    setselectedRooms(checked?[...selectedRooms,value]:selectedRooms.filter(el=>el!==value))
  }
  const handleClick = async () =>{
try {
  await Promise.all(selectedRooms.map(roomId=>{
    const response = await axios.put(`/rooms/available/${roomId}`,{dates:allDates})
    return response.data
  }))
} 
catch (error) {
  
}
  }
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setopen(false)} />
        <span>Select your rooms : </span>
        {data.map(item=>(
          <div className="resereItem">
            <div className="reserveItemInfo">
              <div className="reserveTitle">{item.title}</div>
              <div className="reserveDesc">{item.desc} </div>
              <div className="reserveMax">Max people : {item.maxPeople} </div>
              <div className="reservePrice">{item.price} </div>
            </div>
            {item.roomNumbers.map((roomNumber)=>
            <div className="room"> 
            <label>{roomNumber.number}</label>
            <input type="checkbox" value={roomNumber._id} onChange={(e)=>handleSelect(e)} disabled={isAvailable(roomNumber)} />
            </div>)}
          </div>
        ))}
        <button className="reserveButton" onClick={handleClick}>Reserve now</button>
      </div>

    </div>
  )
}

export default Reserve