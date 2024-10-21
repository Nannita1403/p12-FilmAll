import Loader from "../../Loader/Loader";
import PreviewTitles from "../../PreviewMovie/PreviewTitles";


const Main = () => {
  const { titles } = PreviewTitles();
  
  const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }
console.log(titles);
  if (!titles) {
    return <Loader/>
  }
  return (
    <PreviewTitles/>
  );
};

export default Main;