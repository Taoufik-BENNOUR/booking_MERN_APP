import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MailList from '../components/mailList/MailList'
import Navbar from '../components/navbar/Navbar'
import "./hotel.css"

const Hotel = () => {
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
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQckbmZq998uwdSVrb3kg7w-Dh_9eWXKIKnppvRoiXXivZgwlFBUwujT7NWIItKCkn_k&usqp=CAU" 
  },
]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className='hotelBook'>Book</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Madrid</span>
          </div>
          <p className="hotelDistance">Situated near grand</p>
          <p className="hotelPrice">This is good price</p>
          <div className="hotelImages">
              {photos.map(photo=>(
                <div className="hotelImgWrapper">
                  <img src={photo.src}alt="" className='hotelImg' />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h2 className="hotelTitle">Phenix</h2>
              <p className="hotelDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta modi
                 laboriosam perferendis dolorem velit expedita minus cum invent
                 ore et, nesciunt, voluptates dolor. Ipsa dolorum sed facilis ut neque nobis illo?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Good deal</h2>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Sed at mollitia accusantium. Quaerat suscipit unde omnis iu
               </span>
               <h3>$551  3nights</h3>
               <button>Reserve</button>
            </div>
          </div>
        </div>
        <MailList /> 
        <Footer />
      </div>
    </div>
  )
}

export default Hotel