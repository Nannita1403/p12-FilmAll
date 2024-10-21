
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/partsPage/Footer/Footer";
import Header from "../../components/partsPage/Header/Header";
import Main from "../../components/partsPage/Main/Main";
import PreviewTitles from "../../components/partsPage/Main/PreviewMovie/PreviewTitles";


const Home = () => {
  //const { light } = useContext(ThemeContext));
 // const { titles } = PreviewTitles();
  /*const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }
console.log(titles);
  if (!titles) {
    return <Loader/>
  }*/
  
  return (
    <>
  {/*<Loader/>*/}
   <Header/>
  <Main/>
  <Footer/>
  </>
  )
};

export default Home;