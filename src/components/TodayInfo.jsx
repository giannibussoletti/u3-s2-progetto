import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col } from "react-bootstrap"

const TodayInfo = function (props) {
  return (
    <Col>
      <FontAwesomeIcon
        className="d-block m-auto mb-2"
        icon={props.icon}
        style={{ color: "rgb(255, 255, 255)" }}
      />
      <p className="m-0">{props.info}</p>
      <p className="m-0">{props.infoName}</p>
    </Col>
  )
}
export default TodayInfo
