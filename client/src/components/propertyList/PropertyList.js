import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./propertyList.css"
const PropertyList = () => {
    const {data,loading,error} = useFetch("/hotels/countByType?type=hotel")
    
  return (
    <>
       {data && <div className='propertyList'>
            <div className='propertyListItem'>
                <img src='' className='propertyListImg' />
                <div className='propertyListTitles'>
                    <h1>Hotels</h1>
                    <h2>{data}</h2>
                </div>
            </div>
        </div>}
    </>
  )
}

export default PropertyList