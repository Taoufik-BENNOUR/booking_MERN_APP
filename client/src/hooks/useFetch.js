import {useState,useEffect} from "react"

const useFetch = (url) =>{
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    useEffect(() => {
   const fetchData = async () =>{
    setloading(true)
    try {
        const response =await axios.get(url)
        setdata(response.data)
    } catch (error) {
       seterror(error) 
    }     setloading(false)
   }
   fetchData()
    }, [url])
    const reFetch = async () =>{
        setloading(true)
        try {
            const response =await axios.get(url)
            setdata(response.data)
        } catch (error) {
           seterror(error) 
        }     setloading(false)
       }
      return {data,loading,error,reFetch}
    
}

export default useFetch;

