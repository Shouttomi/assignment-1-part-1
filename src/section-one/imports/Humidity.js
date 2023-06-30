import { WaterDropOutlinedIcon } from "../../imports"

const Humidity = () => {
  return (
    <article className="smallbox">
    <main className="humiditygrid">
      <div>Humidity</div>

      <div className="bluesmallestcontainer">
        <span>
          <WaterDropOutlinedIcon
            sx={{ fontSize: 19 }}
            style={{ color: "white" }}
          ></WaterDropOutlinedIcon>
        </span>
      </div>
    </main>

    <main className="bad82">
      <span className="weight82">82%</span> <span>bad</span>
    </main>

    <div className="numberline-center">
      <main className="small-loading small-loading-extra goodgap">
        <div className="mainloading mainloading-letter ">good</div>
        <div className="mainloading mainloading-letter ">normal</div>
        <div className="mainloading mainloading-letter ">bad</div>
      </main>

      <main className="small-loading twogoodgap">
        <div className="mainloading firstloading-size small-loadingbgcolor"></div>
        <div className="mainloading firstloading-size small-loadingbgcolor"></div>
        <div className="mainloading firstloading-size">
          <span className="quartercolor"></span>
        </div>
      </main>
    </div>
  </article>
  )
}
export default Humidity