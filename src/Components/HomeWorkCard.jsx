import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function HomeWorkCard({ data }) {
  console.log(data);
	const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`${data.homeworkId}`)

}

  return (
    <Card className="mr-bo-20" onClick={() => handleClick(data)}>
      <Card.Body>
        <Card.Text>{data.content ? data.content : 'Image is uploaded please see for the question'}</Card.Text>
        <Container>
          <Row>
            <Col>
              {data.url ?
              <Nav.Link href={data.url}
              >Home work</Nav.Link>
                : ""}
            </Col>
            <Col>
              <Button variant="info" style={{color: '#FFFFFF'}}>Finished</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default HomeWorkCard;