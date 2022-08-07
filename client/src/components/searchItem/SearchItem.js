import React from 'react'
import "./SearchItem.css"
const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="http://cdn.cnn.com/cnnnext/dam/assets/180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg" className='searchItemImg'/>
      <div className='searchItemDesc'>
        <h1 className='siTitle'>Title</h1>
        <span className='siDistance'>500m</span>
        <span className='siTaxi'>Taxi</span>
        <span className='siSubtitle'>Apartment</span>
        <span className='siFeatures'>siFeatures</span>
        <span className='siCancel'>siCancel</span>
        <span className='siCancelSubtitle'>siCancelSub</span>
      </div>
         <div className='searchItemDetails'>
          <div className='siRating'>
           <span>Excelent</span>
           <button>8</button>
          </div>
          <div className='siTexts'>
            <span className='siPrice'>$1</span>
            <span className='siTax'>Includes taxes</span>
            <button className='siCheckbutton'>See avalability</button>
          </div>
         </div>
    </div>
  )
} 
  
export default SearchItem;