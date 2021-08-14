import React from 'react'
import { Image, Card, Label } from 'semantic-ui-react'

function HourlyWeather(props) {
    const {
        dt,
        weather,
        temp,
        feels_like,
        humidity,
        dew_point,
        visibility,
        clouds,
        wind_speed,
        pressure,
    } = props.p_data

    const { timestampConverter, toCapitalize } = props
    return (
        <Card centered size='large' color='blue' className='sectionCard'>
            <Card.Content >
                <Card.Header>
                    {toCapitalize(weather[0].description)}
                    <Image src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} size='mini' />
                </Card.Header>
                <Card.Meta >
                    <span className='date'>{weather[0].main}</span>
                </Card.Meta>
                <Card.Description content='Feels_Like'>
                    <b>Feels Like: </b>{feels_like}° C
                </Card.Description>
                <Card.Description content='Temperature'>
                    <b>Temperature: </b>{temp}° C
                </Card.Description>
                <Card.Description content='Humidity'>
                    <b>Humidity: </b>{humidity}%
                </Card.Description>
                <Card.Description content='Dew_Point'>
                    <b>Dew Point: </b>{dew_point}° C
                </Card.Description>

                <Card.Description content='Visibility'>
                    <b>Visibility: </b>{visibility} meter
                </Card.Description>
                <Card.Description content='Cloud_Ceiling'>
                    <b>Cloud Ceiling: </b>{clouds} %
                </Card.Description>
                <Card.Description content='Wind'>
                    <b>Wind: </b>{wind_speed} m/s
                </Card.Description>
                <Card.Description content='Pressure'>
                    <b>Pressure: </b>{pressure} hPa
                </Card.Description>

            </Card.Content>
            <Card.Content extra>
                {timestampConverter(dt)}
                <Label attached='top right' color='blue'>Hourly
                </Label>
            </Card.Content>
        </Card>
    )
}

export default HourlyWeather
