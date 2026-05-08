import { Col, Container, Image, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const WeekWeather = function (props) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const nMonth = new Date().getMonth() + 1
  const actualMonth = month[new Date().getMonth()]
  const dayMonth = new Date().getDate()
  const actualYear = new Date().getFullYear()

  const completeDate = (n) => {
    return `${actualYear}-${nMonth < 10 ? `0${nMonth}` : nMonth}-${dayMonth + n < 10 ? `0${dayMonth + n}` : dayMonth + n}`
  }

  const arrayOfTomorrow = props.forecast.filter((days) => days.dt_txt.includes(completeDate(1)))
  const arrayThirdDay = props.forecast.filter((days) => days.dt_txt.includes(completeDate(2)))
  const arrayFourthDay = props.forecast.filter((days) => days.dt_txt.includes(completeDate(3)))
  const arrayFifthDay = props.forecast.filter((days) => days.dt_txt.includes(completeDate(4)))

  //   const TdMidnight = arrayOfTomorrow.filter((days) => days.dt_txt.includes("00:00:00"))
  //   const the3Hour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("03:00:00"))
  //   const the6Hour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("06:00:00"))
  //   const the9Hour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("09:00:00"))
  const the12HourTmrw = arrayOfTomorrow.filter((days) => days.dt_txt.includes("12:00:00"))
  const the12Hour3Day = arrayThirdDay.filter((days) => days.dt_txt.includes("12:00:00"))
  const the12Hour4Day = arrayFourthDay.filter((days) => days.dt_txt.includes("12:00:00"))
  const the12Hour5Day = arrayFifthDay.filter((days) => days.dt_txt.includes("12:00:00"))
  //   const the5TeenHour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("15:00:00"))
  //   const the8TeenHour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("18:00:00"))
  //   const the21Hour = arrayOfTomorrow.filter((days) => days.dt_txt.includes("21:00:00"))

  return (
    <div>
      <Container>
        <Row className="mb-5 bg-gradient align-items-center justify-content-center py-4 px-2 rounded-4">
          <Col className="d-flex justify-content-center">
            <div>
              <p className="m-0 text-secondary-emphasis" style={{ fontSize: ".9rem" }}>
                {dayMonth} {actualMonth} {actualYear}
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
            {console.log()}
            <Image
              fluid
              style={{ maxWidth: "134px" }}
              className="w-75"
              src={"./w-icon/" + props.today.weather[0].main.toLowerCase() + ".png"}
            />
          </Col>
        </Row>
        <Row className=" text-center bg-gradient align-items-center justify-content-center py-4 mb-5 px-2 rounded-4">
          <Col>
            <FontAwesomeIcon
              className="d-block m-auto mb-2"
              icon="fa-solid fa-temperature-arrow-down"
              style={{ color: "rgb(255, 255, 255)" }}
            />
            {props.today.main.temp_min.toString().slice(0, 4)}°C
          </Col>
          <Col>
            <FontAwesomeIcon
              className="d-block m-auto mb-2"
              icon="fa-solid fa-temperature-arrow-up"
              style={{ color: "rgb(255, 255, 255)" }}
            />
            {props.today.main.temp_max.toString().slice(0, 4)}°C
          </Col>
          <Col>
            <FontAwesomeIcon
              className="d-block m-auto mb-2"
              icon="fa-solid fa-droplet"
              style={{ color: "rgb(255, 255, 255)" }}
            />
            {props.today.main.humidity}%
          </Col>
          <Col>
            <FontAwesomeIcon
              className="d-block m-auto mb-2"
              icon="fa-solid fa-wind"
              style={{ color: "rgb(255, 255, 255)" }}
            />
            {props.today.wind.speed.toString().slice(0, 1)}m/s
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="gap-4 mt-3 justify-content-between">
          <Col className="d-flex flex-column text-center bg-gradient align-items-center justify-content-center py-4 px-2 rounded-3">
            <p>
              {the12HourTmrw[0].dt_txt.slice(8, 10)}{" "}
              {month[new Date().getMonth(the12HourTmrw[0].dt_txt)]}
            </p>
            <div className="flex-grow-1">
              <Image
                fluid
                style={{ maxWidth: "70px" }}
                className="w-75"
                src={"./w-icon/" + the12HourTmrw[0].weather[0].main.toLowerCase() + ".png"}
              />
            </div>
            <p className="m-0">
              <FontAwesomeIcon
                size="sm"
                icon="fa-solid fa-temperature-full"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              {the12HourTmrw[0].main.temp.toString().slice(0, 2)}°C
            </p>
          </Col>
          <Col className="d-flex flex-column text-center bg-gradient align-items-center justify-content-center py-4 px-2 rounded-3">
            <p>
              {the12Hour3Day[0].dt_txt.slice(8, 10)}{" "}
              {month[new Date().getMonth(the12Hour3Day[0].dt_txt)]}
            </p>
            <div className="flex-grow-1">
              <Image
                fluid
                style={{ maxWidth: "70px" }}
                className="w-75"
                src={"./w-icon/" + the12Hour3Day[0].weather[0].main.toLowerCase() + ".png"}
              />
            </div>
            <p className="m-0">
              <FontAwesomeIcon
                size="sm"
                icon="fa-solid fa-temperature-full"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              {the12Hour3Day[0].main.temp.toString().slice(0, 2)}°C
            </p>
          </Col>
          <Col className="d-flex flex-column text-center bg-gradient align-items-center justify-content-center py-4 px-2 rounded-3">
            <p>
              {the12Hour4Day[0].dt_txt.slice(8, 10)}{" "}
              {month[new Date().getMonth(the12Hour4Day[0].dt_txt)]}
            </p>
            <div className="flex-grow-1">
              <Image
                fluid
                style={{ maxWidth: "70px" }}
                className="w-75"
                src={"./w-icon/" + the12Hour4Day[0].weather[0].main.toLowerCase() + ".png"}
              />
            </div>
            <p className="m-0">
              <FontAwesomeIcon
                size="sm"
                icon="fa-solid fa-temperature-full"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              {the12Hour4Day[0].main.temp.toString().slice(0, 2)}°C
            </p>
          </Col>
          <Col className="d-flex flex-column text-center bg-gradient align-items-center justify-content-center py-4 px-2 rounded-3">
            <p>
              {the12Hour5Day[0].dt_txt.slice(8, 10)}{" "}
              {month[new Date().getMonth(the12Hour5Day[0].dt_txt)]}
            </p>
            <div className="flex-grow-1">
              <Image
                fluid
                style={{ maxWidth: "70px" }}
                className="w-75"
                src={"./w-icon/" + the12Hour5Day[0].weather[0].main.toLowerCase() + ".png"}
              />
            </div>
            <p className="m-0">
              <FontAwesomeIcon
                size="sm"
                icon="fa-solid fa-temperature-full"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              {the12Hour5Day[0].main.temp.toString().slice(0, 2)}°C
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WeekWeather
