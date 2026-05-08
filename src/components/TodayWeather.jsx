import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Image, Row } from "react-bootstrap"
import TodayInfo from "./TodayInfo"

const TodayWeather = function (props) {
  return (
    <Container>
      <Row className="mb-4 bg-primary bg-opacity-50 shadow-sm align-items-center justify-content-center py-4 px-2 rounded-4">
        <Col className="d-flex justify-content-center text-center text-sm-start flex-shrink-1 order-1 order-sm-0">
          <div className="">
            <div>
              <h1 style={{ wordBreak: "break-word" }} className="m-0">
                {props.today.name}
              </h1>
              <p style={{ fontSize: "2rem" }} className="fw-bold mb-0">
                {props.today.main.temp.toString().slice(0, 2)}°C
                <FontAwesomeIcon
                  size="sm"
                  icon="fa-solid fa-temperature-full"
                  style={{ color: "rgb(255, 255, 255)" }}
                />
              </p>
            </div>
            <p className="m-0 text-secondary-emphasis" style={{ fontSize: ".9rem" }}>
              {props.dayMonth} {props.actualMonth} {props.actualYear}
            </p>
            <p className="m-0 text-capitalize today-weather-description">
              {props.today.weather[0].description}
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} className="text-center p-0 order-0 order-sm-1 mb-3 mb-sm-0">
          <Image
            style={{ maxWidth: "160px" }}
            className="w-75"
            src={"./w-icon/" + props.today.weather[0].main.toLowerCase() + ".png"}
          />
        </Col>
      </Row>
      <Row className="mb-5 text-center bg-info bg-opacity-25 shadow-sm align-items-center justify-content-center py-4 mb-2 px-2 rounded-4">
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
          infoName="umidità"
          icon="fa-solid fa-droplet"
          info={props.today.main.humidity + "°%"}
        />
        <TodayInfo
          infoName="vento"
          icon="fa-solid fa-wind"
          info={props.today.wind.speed.toString().slice(0, 1) + "m/s"}
        />
      </Row>
    </Container>
  )
}
export default TodayWeather
