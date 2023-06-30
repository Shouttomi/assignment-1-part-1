import { DeviceThermostatOutlinedIcon } from "../../imports"
import Threetemperatures from "../../Threetemperatures"

const FeelsLike = () => {
  return (
    <article className="smallbox">
    <main className="humiditygrid">
      <div>Feels like</div>

      <div className="bluesmallestcontainer">
        <span>
          <DeviceThermostatOutlinedIcon
            sx={{ fontSize: 19 }}
            style={{ color: "white" }}
          ></DeviceThermostatOutlinedIcon>
        </span>
      </div>
    </main>

    <main className="bad82">
      <span className="weight82">30&#xb0;</span>
    </main>

    <div className="numberline-center">
      <Threetemperatures />

      <main className="small-loading ">
        <div className="mainloading firstloading-size full-loading">
          <span className="threefourthcolor"></span>
        </div>
      </main>
    </div>
  </article>
  )
}
export default FeelsLike