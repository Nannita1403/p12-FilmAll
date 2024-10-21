import { useContext, useEffect, useState } from "react";
import ImgDefault  from "/img_default.jpg"
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../../../providers/ThemePageProvider";
import Loader from "../../../Loader/Loader";
Loader

const PreviewTitles = () => {
    const { light } = useContext(ThemeContext);
    const [titles, setTitles] = useState([[]]);

    const getTitles = ()=> {
      setTimeout(async () => {
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=49';
	      const options = {
	        method: 'GET',
	        headers: {
		      'x-rapidapi-key': '4d75142618msh44a2f5c1b3e69efp158d02jsnc51097d9e4aa',
		      'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	        }};

        const res = await fetch(url, options);        
        const response = await res.json();
        console.log(response, "Soy la respuesta al fetch");
        setTitles(response.titles);
      }, 5000);
    };

    useEffect(() => {
      getTitles(); // sólo se ha ejecutado la primera vez que se ha montado el componente
    }, []); // si el array de dependencias está vacío, sólo se ejecuta una vez lo de dentro
  

    return (
        <Flex wrap='wrap'
        justify="center"
        align="start"
        gap='20px'
        p='50px'
        pt='200px'>
        {titles.map((title) => (
            <Box key={title.id}>
              <Image w="200px" h='300px'src={title.primaryImage.url} cursor='pointer'
              //onClick={}
              filter={`drop-shadow(0px 0px 2px ${
                light ? "var(--light-mode-bg-negative)" : "var(--dark-mode-bg-negative)"
              })`} 
              transition="all 0.5s"
              _hover={{
                transform: "scale(1.1)",
                filter: `drop-shadow(0px 0px 8px)`,
              }} />
              <Box w='200px' wrap='wrap' justify='center' align='center'  >
              <Text justify='center' align='center' pt='10px' filter={`drop-shadow(0px 0px 2px ${
                light ? "var(--light-mode-bg-negative)" : "var(--dark-mode-bg-negative)"
              })`} >{title.titleText.text}</Text>
              </Box>
            </Box>
          ))}
      </Flex>
    );
}
export default PreviewTitles;