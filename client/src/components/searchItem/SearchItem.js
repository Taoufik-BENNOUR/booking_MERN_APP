import React from 'react'
import { Link } from 'react-router-dom';
import "./SearchItem.css"
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
      <img src="http://cdn.cnn.com/cnnnext/dam/assets/180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg" className='searchItemImg'/>
      <div className='searchItemDesc'>
        <h1 className='siTitle'>{item.title}</h1>
        <span className='siDistance'>{item.distance}</span>
        <span className='siTaxi'>Taxi</span>
        <span className='siSubtitle'>Apartment</span>
        <span className='siFeatures'>siFeatures</span>
        <span className='siCancel'>siCancel</span>
        <span className='siCancelSubtitle'>siCancelSub</span>
      </div>
         <div className='searchItemDetails'>
       {item.rating &&   <div className='siRating'>
           <span>Excelent</span>
           <button>{item.rating}</button>
          </div>}
          <div className='siTexts'>
            <span className='siPrice'>{item.cheapesPrice}</span>
            <span className='siTax'>Includes taxes</span>
            <Link to={`/hotels/${item._id}`}>
                      <button className='siCheckbutton'>See avalability</button>
            </Link>
          </div>
         </div>
    </div>
  )
} 
  
export default SearchItem;