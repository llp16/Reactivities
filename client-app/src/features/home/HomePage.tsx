import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment inverted textAlign="center" vertical className="masthead" clearing>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='large' src='/assets/arctradeLogo.png' alt='logo' style={{marginBottom:12, marginRight: 10}}/>
                    <Image size='massive' src='/assets/arctradeLogo_name.png' alt='logoName' style={{marginBottom:12, width:120}}/>
                </Header>
                <Header as='h2' inverted content='Welcome to Arctrade Career'/>
                <Button as={Link} to='/activities' size='huge' inverted>
                    Explore the positions
                </Button>
            </Container>

        </Segment>
    )
}