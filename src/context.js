import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { key } from './Util/params'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [coordinates, setCoordinates] = useState(['19.0760', '72.8777'])
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [activeMenu, setActiveMenu] = useState('Home')

    //fetching data
    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const _res = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${key}&units=metric&exclude=minutely`
            )
            const _data = await _res.json()
            setData(_data)

            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }

    }, [coordinates])

    useEffect(() => {
        fetchData()
    }, [coordinates, fetchData])

    return <AppContext.Provider
        value={{ loading, data, activeMenu, setActiveMenu, setCoordinates }}
    >
        {children}
    </AppContext.Provider>

}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }