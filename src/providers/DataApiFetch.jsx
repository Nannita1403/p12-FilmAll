import { createContext, useContext } from "react";

export const DataApiContext = createContext();

export const useFetchData =()=> {
    return useContext(DataApiContext)
}

export const DataPeticion = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [titles, setTitles] = useState({ data: [] })
    const [error, setError] = useState(null)
  
  
    const fetchDataTitles = async () => {
      try {
          setLoading(true)
    
      const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=45';
      const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': '4d75142618msh44a2f5c1b3e69efp158d02jsnc51097d9e4aa',
          'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
      }};
      const response = await fetch(url, options);
      console.log(response);
      
      const res = await response.json();
      console.log(res.results);
      setTitles(res.results);
  } catch (error) {
      console.error('Error fetching data:', error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchDataTitles()
  }, [])

const contextValue = {
titles,
setTitles,
error
}
return (
    <DataApiContext.Provider value={contextValue}>
      {children}
    </DataApiContext.Provider>
  )
}