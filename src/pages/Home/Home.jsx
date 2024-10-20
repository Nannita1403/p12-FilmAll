import MovieCard from "../../components/PlatformParts/MovieCard/MovieCard";
import PeticionMoviesSeries from "../../providers/VariosFetch/Peticion";
import PreviewMovie from "../../components/PlatformParts/PreviewMovie/PreviewMovie"
import { useFetchData } from "../../providers/FetchApiProvider/IMBFetch";
import Loader from "../../components/Loader/Loader";
import PreviewTitles from "../../components/PlatformParts/PreviewMovie/PreviewTitles";


const Home = () => {
  //const { light } = useContext(ThemeContext));
  const { titles } = useFetchData()
  const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }
console.log(titles);
  if (!titles) {
    return <Loader/>
  }
  
  return (
    <>
  {/*<Loader/>*/}
 { /* <PreviewMovie/>*/}

 <PreviewTitles/>


  </>
  )
};

export default Home;