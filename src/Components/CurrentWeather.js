import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

function CurrentWeather(props) {
    const {
        weather,
        temp,
        humidity,
        dew_point,
        uvi,
        visibility,
        clouds,
        wind_speed,
        pressure,
    } = props.p_data

    const { iconPicker, toCapitalize } = props
    return (
        <Card centered size='large' color='red' >
            <Card.Content>
                <Image wrapped size='small' fluid centered  >
                    {iconPicker(weather[0].main)}
                </Image>
                <br></br>
                <Card.Header>
                    {toCapitalize(weather[0].description)}
                    <Image src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} size='mini' />
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{weather[0].main}</span>
                </Card.Meta>
                <Card.Description content='Temperature'>
                    <b>Temperature: </b>{temp}° C
                </Card.Description>
                <Card.Description content='Humidity'>
                    <b>Humidity: </b>{humidity}%
                </Card.Description>
                <Card.Description content='Dew_Point'>
                    <b>Dew Point: </b>{dew_point}° C
                </Card.Description>
                <Card.Description content='UV_Index'>
                    <b>UV Index: </b>{uvi}
                </Card.Description>
                <Card.Description content='Visibility'>
                    <b>Visibility: </b>{visibility} meters
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
                Current Weather
                <Label attached='top right' color='red'>Current
                </Label>
            </Card.Content>
        </Card>
    )
}

export default CurrentWeather
