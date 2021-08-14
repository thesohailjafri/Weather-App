import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { useGlobalContext } from '../context'
function Navbar() {
    const { activeMenu, setActiveMenu } = useGlobalContext()



    const handleItemClick = (e, { name }) => {
        setActiveMenu(name)
    }
    return (
        <>
            <Menu fluid>
                <Menu.Item
                    name='Home'
                    as={Link} to='/'
                    active={activeMenu === 'Home'}
                    onClick={handleItemClick}
                >Home</Menu.Item>

                <Menu.Item
                    name='Service'
                    as={Link} to='/service'
                    active={activeMenu === 'Service'}
                    onClick={handleItemClick}
                >Service</Menu.Item>

                <Menu.Item
                    name='About'
                    as={Link} to='/about'
                    active={activeMenu === 'About'}
                    onClick={handleItemClick}
                >About</Menu.Item>

                <Menu.Item
                    name='Contact'
                    as={Link} to='/contact'
                    active={activeMenu === 'Contact'}
                    onClick={handleItemClick}
                >Contact</Menu.Item>
            </Menu>

        </>
    )
}

export default Navbar

