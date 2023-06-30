
import { ThunderstormOutlinedIcon } from "../../imports"
import {ManyLoadingNumbers} from "../../components"
import {ManyLoadings} from "../../components"

const Precipitation = () => {
  return (
    <article className="smallbox">
    <main className="humiditygrid">
      <div>Precipitation</div>

      <div className="bluesmallestcontainer">
        <span>
          <ThunderstormOutlinedIcon
            sx={{ fontSize: 19 }}
            style={{ color: "white" }}
          ></ThunderstormOutlinedIcon>
        </span>
      </div>
    </main>

    <main className="bad82">
      <span className="weight82">1.4cm</span>
    </main>

    <div className="numberline-center">
      <ManyLoadingNumbers />
      <ManyLoadings />
    </div>
  </article>
  )
}
export default Precipitation