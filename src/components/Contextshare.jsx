import React, { createContext, useState } from 'react'

export const registerContext=createContext()

export const taskContext = createContext();

function Contextshare({ children }) {
  const[registerData,setregisterData]=useState([])

    const [taskData, settaskData] = useState([]);

  return (
    <>
      <registerContext.Provider value={{registerData,setregisterData}} >

    <taskContext.Provider value={{ taskData, settaskData }}>
        {children}
      </taskContext.Provider>
      </registerContext.Provider>  

    </>
  )
}

export default Contextshare