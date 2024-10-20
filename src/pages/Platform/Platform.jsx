import React from "react"
import { useFetchData } from "../../providers/VariosFetch/FetchDataContext"
import Loader from "../../components/Loader/Loader"

const MoviePlatform = () => {
    const [filter, setFilter] = useState('')
    const [showNavbar, setShowNavbar] = useState(true)
    const { fetchData } = useFetchData  ()
  
    const handleMovieSearch = (inputValue) => {
      setFilter(inputValue)
    }
  
    if (!fetchData.data.length) {
      return <Loader />
    }
return(
    <>
   <header>
        {showNavbar}
        <Navbar handleMovieSearch={handleMovieSearch} showNavbar={showNavbar} />
      </header>
     {/* <main>
        <MoviePreview />
        <MovieList filter={filter} setShowNavbar={setShowNavbar} />
      </main>*/}
    </>
)
}
export default MoviePlatform