
import { FiberManualRecordIcon,AddBoxIcon } from "./imports"

const Griddegrees = () => {
  return (
    <article className="griddegrees">
    <div className="welcomeback">
      <AddBoxIcon
        sx={{ fontSize: 30 }}
        style={{ color: "white" }}
      ></AddBoxIcon>
    </div>

    <main className="threedotflex">
      <div className="mainloading Initialloading-size initial-loadingbgcolor"></div>

      <FiberManualRecordIcon
        sx={{ fontSize: 10 }}
        style={{ color: "white" }}
      ></FiberManualRecordIcon>
      <FiberManualRecordIcon
        sx={{ fontSize: 10 }}
        style={{ color: "white" }}
      ></FiberManualRecordIcon>
    </main>

    <div className="centiflex">
      <span style={{ color: "white", fontSize: "10px" }}>&#xb0;C</span>

      <div className="mainloading justloading-size">
        <span className="circlecolor"></span>
      </div>
      <span style={{ color: "white", fontSize: "10px" }}>&#xb0;F</span>
    </div>
  </article>
  )
}
export default Griddegrees