import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import WeekWeather from "./components/WeekWeather"
import "../src/assets/style.css"
import { library } from "@fortawesome/fontawesome-svg-core"

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

const API = "8b406c3892042818666868459003f69b&"

const App = function () {
  const [city, setCity] = useState("Roma")
  const [actualWeather, setActualWeather] = useState()
  const [weekWeather, setWeekWeather] = useState()
  const windowWidth = window.innerWidth < 992

  const fetchingToday = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${API}units=metric&lang=it`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setActualWeather(data)
      })
      .catch((err) => console.log(err))
  }
  const fetchingWeek = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},IT&appid=${API}units=metric`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setWeekWeather(data.list)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchingToday()
    fetchingWeek()
  }, [])

  if (!actualWeather || !weekWeather) {
    return <p>Loading</p>
  }

  return (
    <div className="p-4 d-flex flex-column">
      <div
        style={{ zIndex: "10" }}
        className={
          windowWidth
            ? " order-1 order-lg-0 position-sticky bottom-0"
            : "order-1 order-lg-0 position-sticky top-0"
        }>
        <NavBar setCity={setCity} todayWeather={fetchingToday} nextDaysWeather={fetchingWeek} />
      </div>
      <div className="order-0 order-lg-1">
        <WeekWeather today={actualWeather} forecast={weekWeather} />
      </div>
    </div>
  )
}
export default App
