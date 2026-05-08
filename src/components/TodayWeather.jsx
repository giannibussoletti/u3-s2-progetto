import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Image, Row } from "react-bootstrap"
import TodayInfo from "./TodayInfo"

const TodayWeather = function (props) {
  return (
    <Container>
      <Row className="mb-5 bg-gradient align-items-center justify-content-center py-4 px-2 rounded-3">
        <Col className="d-flex justify-content-center">
          <div>
            <p className="m-0 text-secondary-emphasis" style={{ fontSize: ".9rem" }}>
              {props.dayMonth} {props.actualMonth} {props.actualYear}
            </p>
            <p className="m-0 text-capitalize today-weather-description">
              {props.today.weather[0].description}
            </p>
            <p style={{ fontSize: "2rem" }} className="fw-bold mb-0">
              {props.today.main.temp.toString().slice(0, 2)}°C
              <FontAwesomeIcon
                size="sm"
                icon="fa-solid fa-temperature-full"
                style={{ color: "rgb(255, 255, 255)" }}
              />
            </p>
          </div>
        </Col>
        <Col className="text-center p-0">
          <Image
            fluid
            style={{ maxWidth: "134px" }}
            className="w-75"
            src={"./w-icon/" + props.today.weather[0].main.toLowerCase() + ".png"}
          />
        </Col>
      </Row>
      <Row className=" text-center bg-gradient align-items-center justify-content-center py-4 mb-5 px-2 rounded-3">
        <TodayInfo
          infoName="min."
          icon="fa-solid fa-temperature-arrow-down"
          info={props.today.main.temp_min.toString().slice(0, 4) + "°C"}
        />
        <TodayInfo
          infoName="max."
          icon="fa-solid fa-temperature-arrow-up"
          info={props.today.main.temp_max.toString().slice(0, 4) + "°C"}
        />
        <TodayInfo
          infoName="humidity"
          icon="fa-solid fa-droplet"
          info={props.today.main.humidity + "°%"}
        />
        <TodayInfo
          infoName="wind"
          icon="fa-solid fa-wind"
          info={props.today.wind.speed.toString().slice(0, 1) + "m/s"}
        />
      </Row>
    </Container>
  )
}
export default TodayWeather
