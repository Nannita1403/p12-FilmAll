import { createContext, useState } from "react";

export const ThemeContext = createContext();

//componente provedor del tema para que cualquier hijo pueda acceder a los valores y no tenga que ir por props
const ThemePageProvider = ({children}) => {
   const [light, setLight] = useState(true);
  return (
    <ThemeContext.Provider value= {{ light, setLight }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemePageProvider
