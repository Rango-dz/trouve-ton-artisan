'use client'

import { createContext, useContext, useState } from "react"

const DataIdContext = createContext({})

export const DataIdContextProvider = ({Children}) => {

    const [dataId, setDataId] = useState('')


    return(
        <>
            <DataIdContext.Provider value={{dataId, setDataId}}>
                {Children}
            </DataIdContext.Provider>
        </>
    )
}
export const useDataIdContext = ()=> useContext(DataIdContext)