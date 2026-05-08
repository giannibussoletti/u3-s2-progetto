import { Col, Container, Row } from "react-bootstrap"

import SingleWeek from "./SingleWeek"
import TodayWeather from "./TodayWeather"

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

  const hoursOfDay = [
    "00:00:00",
    "03:00:00",
    "06:00:00",
    "09:00:00",
    "15:00:00",
    "18:00:00",
    "21:00:00",
  ]

  const numberOfDays = [1, 2, 3]

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
      <Container>
        {numberOfDays.map((Singleday) => {
          return (
            <Row className="gap-2 mt-3 justify-content-between bg-gradient rounded-3">
              <Col>
                <h2 className="mb-0 mt-2 text-center">
                  {actualDay(Singleday)} {month[realMonth].toLowerCase()}
                </h2>
              </Col>
              <Row>
                {hoursOfDay.map((hour, i) => {
                  const filtering = filterHours(filterDays(Singleday), hour)[0]
                  return <SingleWeek filtering={filtering} index={i} />
                })}
              </Row>
            </Row>
          )
        })}
      </Container>
    </div>
  )
}

export default WeekWeather
