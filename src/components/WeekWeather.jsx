import { Col, Container, Row } from "react-bootstrap"

import SingleWeek from "./SingleWeek"
import TodayWeather from "./TodayWeather"

const WeekWeather = function (props) {
  const month = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ]

  const hoursOfDay = [
    "00:00:00",
    "03:00:00",
    "06:00:00",
    "09:00:00",
    "15:00:00",
    "18:00:00",
    "21:00:00",
  ]

  const numberOfDays = [1, 2, 3, 4]

  const nMonth = new Date().getMonth() + 1
  const actualMonth = month[new Date().getMonth()]
  const dayMonth = new Date().getDate()
  const actualYear = new Date().getFullYear()

  const completeDate = (n) => {
    return `${actualYear}-${nMonth < 10 ? `0${nMonth}` : nMonth}-${dayMonth + n < 10 ? `0${dayMonth + n}` : dayMonth + n}`
  }

  const filterDays = function (n) {
    return props.forecast.filter((days) => days.dt_txt.includes(completeDate(n)))
  }

  const filterHours = function (array, hours) {
    return array.filter((days) => days.dt_txt.includes(hours))
  }
  const actualDay = (n) => filterHours(filterDays(n), "00:00:00")[0].dt_txt.slice(8, 10)

  const realMonth = new Date().getMonth(filterHours(filterDays(1), "00:00:00")[0].dt_txt)
  return (
    <div>
      <TodayWeather
        actualMonth={actualMonth}
        dayMonth={dayMonth}
        actualYear={actualYear}
        today={props.today}
      />
      <Container className="p-0">
        {numberOfDays.map((Singleday) => {
          return (
            <div className="mb-4 bg-info bg-opacity-10 shadow-sm rounded-4 px-2 flex-nowrap position-relative">
              <span className="d-inline d-md-none single-carousel-left rounded-4"></span>
              <span className="d-inline d-md-none single-carousel-right rounded-4"></span>
              <Row className="gap-2 mt-3 justify-content-between">
                <Col>
                  <h2 className=" my-3 text-center">
                    {actualDay(Singleday)} {month[realMonth].toLowerCase()}
                  </h2>
                </Col>
              </Row>
              <div className=" overflow-scroll px-2 hidden-scrollbar">
                <Row className="flex-nowrap m-0">
                  <Col style={{ minWidth: "10%" }} className="d-block d-md-none"></Col>
                  {hoursOfDay.map((hour, i) => {
                    const filtering = filterHours(filterDays(Singleday), hour)[0]
                    return <SingleWeek filtering={filtering} index={i} />
                  })}
                  <Col style={{ minWidth: "10%" }} className="d-block d-md-none"></Col>
                </Row>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default WeekWeather
