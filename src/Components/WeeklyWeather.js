import React from 'react'
import { Image, Card, Label } from 'semantic-ui-react'

function WeeklyWeather(props) {
    const {
        dt,
        weather,
        temp,
        humidity,
        uvi,
        clouds,
        wind_speed,
    } = props.p_data



    const { timestampConverter, toCapitalize } = props
    return (
        <Card centered size='large' color='yellow' className='sectionCard'>
            <Card.Content>
                <Card.Header>
                    {toCapitalize(weather[0].description)}
                    <Image src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} size='mini' />
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{weather[0].main}</span>
                </Card.Meta>

                <Card.Description content='Temperature'>
                    <b>Temperature At Day: </b>{temp.day}° C
                </Card.Description>

                <Card.Description content='Temperature'>
                    <b>Temperature At Evening: </b>{temp.eve}° C
                </Card.Description>

                <Card.Description content='Temperature'>
                    <b>Temperature At Night: </b>{temp.night}° C
                </Card.Description>

                <Card.Description content='Humidity'>
                    <b>Humidity: </b>{humidity}%
                </Card.Description>

                <Card.Description content='UV_Index'>
                    <b>UV Index: </b>{uvi}
                </Card.Description>

                <Card.Description content='Cloud_Ceiling'>
                    <b>Cloud Ceiling: </b>{clouds} %
                </Card.Description>

                <Card.Description content='Wind'>
                    <b>Wind: </b>{wind_speed} m/s
                </Card.Description>



            </Card.Content>
            <Card.Content extra>
                {timestampConverter(dt)}
                <Label attached='top right' color='yellow'>WeekLy
                </Label>
            </Card.Content>
        </Card>
    )
}

export default WeeklyWeather

