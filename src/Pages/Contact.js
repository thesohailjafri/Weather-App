import React, { useState } from 'react'
import { Form, Input, Message, Button, Container, Header } from 'semantic-ui-react'

function Contact() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobile, setMobile] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [errorPool, setErrorPool] = useState([])
    const [isValidated, setIsValidated] = useState(false)

    const resetForm = () => {
        setIsValidated(false)
        setErrorPool([])
        setFirstName('')
        setLastName('')
        setMobile('')
        setAge('')
        setEmail('')
    }

    const handelChange = (e) => {

        const { name, value } = e.target

        if (name === 'firstName') {
            setFirstName(value)
        }
        if (name === 'lastName') {
            setLastName(value)
        }
        if (name === 'mobile') {
            setMobile(value)
        }
        if (name === 'age') {
            setAge(parseInt(value))
        }
        if (name === 'email') {
            setEmail(value)
        }


    }

    const handleSubmit = (e) => {

        setErrorPool([])

        e.preventDefault()
        let regexEmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        let regexName = "^(?=.{1,50}$)[a-zA-Z]+(?:['_.s][a-zA-Z]+)*$"

        if (!firstName.match(regexName)) {
            setErrorPool(prev => [...prev, 'Invalid First Name'])
        }

        if (!lastName.match(regexName)) {
            setErrorPool(prev => [...prev, 'Invalid Last Name'])
        }

        if (!email.match(regexEmail)) {
            setErrorPool(prev => [...prev, 'Invalid Email'])
        }

        if (mobile.length !== 10) {
            setErrorPool(prev => [...prev, 'Invalid Mobile'])
        }

        if (age > 100 || age === '' || !age) {
            setErrorPool(prev => [...prev, 'Invalid Age'])
        }

        if (errorPool.length === 0) {
            setIsValidated(true)
        }


    }

    return (
        <Container>

            {!(errorPool.length === 0 && isValidated) ?
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            name='firstName'
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            onChange={handelChange}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            name='lastName'
                            control={Input}
                            label='Last name'
                            placeholder='Last name'
                            onChange={handelChange}
                        />

                        <Form.Field
                            id='form-input-control-mobile'
                            name='mobile'
                            control={Input}
                            label='Mobile'
                            placeholder='Mobile'
                            onChange={handelChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>

                        <Form.Field
                            id='form-input-control-age'
                            name='age'
                            control={Input}
                            label='Age'
                            placeholder='Age'
                            onChange={handelChange}
                        />
                        <Form.Field
                            id='form-input-control-error-email'
                            name='email'
                            type='email'
                            control={Input}
                            label='Email'
                            placeholder='joe@schmoe.com'
                            onChange={handelChange}
                        />

                    </Form.Group>

                    <Message
                        warning
                        header='Could you check something!'
                        list={errorPool}
                    />
                    {errorPool.length > 0 &&
                        <Form.Field>
                            < Form warning>
                                <Message
                                    warning
                                    header='Could you check something!'
                                    list={errorPool}
                                />
                            </Form>
                        </Form.Field>
                    }

                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Submit'
                        type='submit'
                    />
                </Form>
                :
                <>
                    <Header size='small'>First Name : <span>{firstName}</span></Header>
                    <Header size='small'>Last Name : <span>{lastName}</span></Header>
                    <Header size='small'>Mobile Number : <span>{mobile}</span></Header>
                    <Header size='small'>Age : <span>{age}</span></Header>
                    <Header size='small'>Email : <span>{email}</span></Header>
                    <Button content='Back' onClick={resetForm}></Button>
                </>
            }
        </Container>
    )
}

export default Contact
