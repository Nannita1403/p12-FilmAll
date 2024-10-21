import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from './providers/ThemePageProvider';
import Error from './components/AlertError/Error';
import Home from './pages/Home/Home';
import { useFetchData } from './providers/DataApiFetch';



//cambio visual del theme=por un estado
const App = () => {
//traigo light para el tema y configurarlo en el Box 
  const {light}= useContext(ThemeContext);
  const {error} = useFetchData();

  return (
    <Box 
      minH='100svh' 
      bg={`var(--${light ? "light" : "dark"}-mode-bg)`} 
      color={`var(--${light ? "light" : "dark"}-mode-text)`}
      transition="all 0.5s">
        <>
        {error ? <Error/> : <Home/>}
        </>
    </Box>
  )
}

export default App
