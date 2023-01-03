import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/arctradeLogo.png" alt="logo" style={{marginRight: '10px'}}/>
                    <img src="/assets/arctradeLogo_name.png" alt="logoName" style={{marginRight: '10px', width: 100}}/>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities"/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                </Menu.Item>
            </Container>

        </Menu>
    )
}