import { faArrowLeft, faArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailList from '../components/mailList/MailList'
import Navbar from '../components/navbar/Navbar'
import useFetch from '../../hooks/useFetch'

import "./hotel.css"
import { SearchContext } from '../context/SearchContext'
import { AuthContext } from '../context/AuthContext'
import Reserve from '../components/reserve/Reserve'

const Hotel = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const id = location.pathname.split("/")[2]
  const {data,loading,error,refetch} = useFetch(`/hotels/${id}`)
  const {dates} = useContext(SearchContext)
  const {user} = useContext(AuthContext)

  const [slideNumber, setslideNumber] = useState(0)
  const [open, setopen] = useState(false)
  const [openModal, setopenModal] = useState(false)

  const handleopen = (i) =>{
    setslideNumber(i);
    setopen(true)
  }
  
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction ==="l"){
      newSlideNumber = slideNumber === 0? photos.length-1 : slideNumber -1
    }
    else{
      newSlideNumber = slideNumber === photos.length-1 ?0 : slideNumber +1
    }
    setslideNumber(newSlideNumber)
  }
  const handleClick = () =>{
    if(user){setopenModal(true)

    }else{
      navigate("/login")
    }
  }
const photos = [
  {
    src:"https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
  },
  {
    src:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg"
  },
  {
    src:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg"
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQckbmZq998uwdSVrb3kg7w-Dh_9eWXKIKnppvRoiXXivZgwlFBUwujT7NWIItKCkn_k&usqp=CAU" 
  }, {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQckbmZq998uwdSVrb3kg7w-Dh_9eWXKIKnppvRoiXXivZgwlFBUwujT7NWIItKCkn_k&usqp=CAU" 
  }, {
    src:"https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=HomeHero&gravity=North" 
  },
]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
      {open &&  <div className='slider'>
      <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setopen(false)}/>
      <div className='sliderWrapper'>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={()=>handleMove("l") }/>
        <img src={photos[slideNumber].src} alt='' className='sliderImg' />
      <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={()=>handleMove("r")} />
      </div>
        </div>}
        <div className="hotelWrapper" >
          <button className='hotelBook'>Book</button>
          <h1 className="hotelTitle"> {data.name} </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Madrid</span>
          </div>
          <p className="hotelDistance">{data.distance}</p>
          <p className="hotelPrice">This is good price {data.cheapestPrice}</p>
          <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleopen(i)} src={photo.src}alt="" className='hotelImg' />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h2 className="hotelTitle">{data.title}</h2>
              <p className="hotelDesc">
              {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Good deal</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Sed at mollitia accusantium. Quaerat suscipit unde omnis iu
               </span>
               <h3>${days*data.cheapestPrice*options.room}  {days} nights</h3>
               <button onClick={handleClick}>Reserve</button>
            </div>
          </div>
        </div>
        <MailList /> 
        <Footer />
      </div>
      {openModal && <Reserve setopen={setopenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel