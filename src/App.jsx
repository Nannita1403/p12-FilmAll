import React, { useContext } from 'react'
import ChangeTheme from './components/ChangeTheme/ChangeTheme'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from './providers/ThemePageProvider';
import Home from './pages/Home/Home';
import Error from './components/AlertError/Error';
import { useFetchData } from './providers/FetchApiProvider/IMBFetch';

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
      <ChangeTheme/>
      <>
   {error ? <Error /> :<Home/>}
      </>
      
    </Box>
  )
}

export default App
