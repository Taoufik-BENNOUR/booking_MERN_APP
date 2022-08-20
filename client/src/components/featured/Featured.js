import React from 'react'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin")
  return (
    <div className='featured'>
        {loading?"loading...":<><div className='featuredItem'>
          <img src='' className='featuredImg'/>
          <div className='featuredTitles'>
            <h1>Berlin</h1>
            <h1>{data[0]} </h1>
          </div>
        </div>
        <div className='featuredItem'>
          <img src='' className='featuredImg'/>
          <div className='featuredTitles'>
            <h1>Dublin</h1>
            <h1>props</h1>
          </div>
        </div>
        <div className='featuredItem'>
          <img src=''className='featuredImg'/>
          <div className='featuredTitles'>
            <h1>Dublin</h1>
            <h1>props</h1>
          </div>
        </div></>}
    </div>
  )
}

export default Featured