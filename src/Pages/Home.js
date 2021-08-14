import React from 'react'
import { Grid, Select } from 'semantic-ui-react'
import { useGlobalContext } from '../context'
import { RiCloudLine, RiRainyLine, RiHazeLine, RiThunderstormsLine, RiSnowyLine, RiCloudOffLine } from 'react-icons/ri'


/* COMPONENTS */
import CurrentWeather from '../Components/CurrentWeather'
import HourlyWeather from '../Components/HourlyWeather'
import WeeklyWeather from '../Components/WeeklyWeather'
import Loader from '../Components/Loader'

function Home() {
    const { data, loading, setCoordinates } = useGlobalContext()

    const cityOption = [
        { key: '1', value: 'mumbai', text: 'Mumbai' },
        { key: '2', value: 'delhi', text: 'Delhi' },
        { key: '3', value: 'goa', text: 'Goa' },
        { key: '4', value: 'kolkata', text: 'Kolkata' },
    ]

    const changeCity = (e, { value }) => {
        switch (value) {
            case 'mumbai':
                setCoordinates(['19.0760', '72.8777'])
                break
            case 'delhi':
                setCoordinates(['19.0760', '77.1025'])
                break
            case 'goa':
                setCoordinates(['15.2993', '74.1240'])
                break
            case 'kolkata':
                setCoordinates(['22.5726', '88.3639'])
                break
            default:
                setCoordinates(['19.0760', '72.8777'])
        }
    }

    const iconPicker = (condition) => {
        let icon
        switch (condition) {
            case 'Rain':
                icon = <RiRainyLine />
                break
            case 'Clouds':
                icon = <RiCloudLine />
                break
            case 'Haze':
                icon = <RiHazeLine />
                break
            case 'Exteme':
                icon = <RiThunderstormsLine />
                break
            case 'Thunderstorm':
                icon = <RiThunderstormsLine />
                break
            case 'Snow':
                icon = <RiSnowyLine />
                break
            default:
                icon = <RiCloudOffLine />
        }
        return icon
    }

    const timestampConverterToTime = (timestamp) => {
        let theDate = new Date(timestamp * 1000)
        let d = theDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLocaleUpperCase()
        return d
    }

    const timestampConverterToDate = (timestamp) => {
        let theDate = new Date(timestamp * 1000)
        let d = theDate.toDateString()
        return d
    }

    const toCapitalize = (str) => {
        const arr = str.split(" ")
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

        }
        const str2 = arr.join(" ")
        return (str2)
    }

    if (loading) {
        return <Loader />
    }
    if (data) {
        return (
            <div>
                <div className="dropdownMenu">
                    <Select placeholder='Select Your City' options={cityOption}
                        onChange={changeCity}
                    />
                </div>

                <CurrentWeather p_data={data.current} iconPicker={iconPicker} toCapitalize={toCapitalize} />
                <h3 className='sectionHead'>Hourly Section</h3>
                <Grid padded>
                    <Grid.Row >
                        {data.hourly.slice(0, 12).map((item, index) => {
                            return <HourlyWeather p_data={item} timestampConverter={timestampConverterToTime} toCapitalize={toCapitalize} />
                        })}
                    </Grid.Row>
                </Grid>

                <h3 className='sectionHead'>Weekly Section</h3>
                <Grid padded>
                    <Grid.Row >
                        {data.daily.slice(1).map((item, index) => {
                            return <WeeklyWeather p_data={item} timestampConverter={timestampConverterToDate} toCapitalize={toCapitalize} />
                        })}
                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}
export default Home

