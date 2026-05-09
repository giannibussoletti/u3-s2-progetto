import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const NavBar = function (props) {
  const [search, setSearch] = useState("Roma")
  console.log()
  return (
    <Container className="mb-5 mt-lg-5">
      <Form>
        <Row className="justify-content-between">
          <Col sm="auto" className="p-0 flex-grow-1">
            <Form.Control
              style={{ backdropFilter: "blur(10px)" }}
              type="text"
              size="lg"
              placeholder="Che tempo fa li?"
              className=" mr-sm-2 w-100 bg-primary bg-opacity-25 border-1 border-light"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                props.setCity(e.target.value)
              }}
            />
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            <Button
              style={{ backdropFilter: "blur(10px)" }}
              className="mt-2 mt-sm-0 bg-info bg-opacity-75 border-0 px-4"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                props.todayWeather()
                props.nextDaysWeather()
              }}>
              CERCA
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default NavBar
