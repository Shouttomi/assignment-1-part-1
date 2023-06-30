import { AirSharpIcon } from "../../imports"
import {GaugeNumbers} from "../../components"

const Wind = () => {
  return (
    <article className="smallbox">
    <main className="humiditygrid">
      <div>Wind</div>

      <div className="bluesmallestcontainer">
        <span>
          <AirSharpIcon
            sx={{ fontSize: 19 }}
            style={{ color: "white" }}
          ></AirSharpIcon>
        </span>
      </div>
    </main>

    <main className="gaugebox">
      <main className="c-shape">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="126px"
          height="105px"
          style={{ position: "absolute" }}
        >
          <circle
            cx="80"
            cy="80"
            r="50"
            stroke-linecap="round"
            className="circle2"
          />
        </svg>
      </main>

      <main className="c-shape2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="40px"
          height="125px"
          style={{ position: "absolute" }}
        >
          <circle
            cx="80"
            cy="80"
            r="50"
            stroke-linecap="round"
            className="circle1"
          />
        </svg>
      </main>

      <div className="metergaugeflex">
        <main className="metergauge"></main>
        <main className="metergaugepoint"></main>
      </div>

      <div className="eightkm">8 Km/h</div>

    
      <GaugeNumbers/>
      
    </main>
  </article>
  )
}
export default Wind