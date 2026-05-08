import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const NavBar = function (props) {
  const [search, setSearch] = useState("Roma")

  return (
    <Container className="mt-5">
      <Form>
        <Row className="justify-content-between">
          <Col xs={10} className="p-0">
            <Form.Control
              type="text"
              placeholder="Che tempo fa li?"
              className=" mr-sm-2"
              size="lg"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                props.setCity(e.target.value)
              }}
            />
          </Col>
          <Col className="p-0 d-flex justify-content-end ">
            <Button
              type="submit"
              variant="light"
              onClick={(e) => {
                e.preventDefault()
                props.todayWeather()
                props.nextDaysWeather()
              }}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default NavBar
