import useFetch from '../../hooks/useFetch'
import "./featuredProperties.css"
const FeaturedProperties = () => {
    const {data,loading,error} = useFetch("/hotels/countByType?cities=berlin")

  return (
      <div className='featuredProperties'>
        
        <div className='fpItem'>
            <img src='' className="fpImg" />
            <span className='fpName'></span>
            <span className='fpCity'></span>
            <span className='fpPrice'></span>
            <div className='fpRating'>
                <button>8</button>
                <span>good</span>
            </div>
        </div>
        
    </div>
  )
}

export default FeaturedProperties