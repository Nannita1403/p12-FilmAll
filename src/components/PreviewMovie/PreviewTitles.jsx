import { useContext } from "react";
import { IBMDataContext  } from "../../../providers/IMBFetch";
import ImgDefault  from "/img_default.jpg"
import { ThemeContext } from "../../../providers/ThemePageProvider";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const PreviewTitles = () => {
    const { light } = useContext(ThemeContext);
    const { titles} = useContext(IBMDataContext);

    return (
        <Flex wrap='wrap'
        justify="center"
        align="start"
        gap='20px'
        p='50px'
        pt='200px'>
        {titles.length &&
          titles.map((title) => (
            <Box key={title.id}>
                {console.log(title)}
              <Image w="200px" h='300px'src={title.primaryImage?.url || ImgDefault } cursor='pointer'
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