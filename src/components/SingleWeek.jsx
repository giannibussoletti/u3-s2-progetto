import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Image } from "react-bootstrap"

const SingleWeek = function (props) {
  return (
    <Col
      key={props.index}
      className="d-flex flex-column text-center align-items-center justify-content-center pb-3 px-2">
      <div className="flex-grow-1">
        <Image
          fluid
          style={{ maxWidth: "70px" }}
          className="w-75 my-2"
          src={"./w-icon/" + props.filtering.weather[0].main.toLowerCase() + ".png"}
        />
      </div>
      <p className="m-0">
        <FontAwesomeIcon
          size="sm"
          icon="fa-solid fa-temperature-full"
          style={{ color: "rgb(255, 255, 255)" }}
        />
        {props.filtering.main.temp.toString().slice(0, 2)}°C
      </p>
      <p>{props.filtering.dt_txt.slice(10, 16)}</p>
    </Col>
  )
}
export default SingleWeek
