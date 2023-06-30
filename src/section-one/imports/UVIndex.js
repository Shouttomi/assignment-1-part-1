import { LightModeOutlinedIcon } from "../../imports"
import NumberLine from "../../NumberLine"
import UVIndexLoading from "../../UVIndexLoading"

const UVIndex = () => {
  return (
    <article className="smallbox">
    <main className="humiditygrid">
      <div>UV index</div>

      <div className="bluesmallestcontainer">
        <span>
          <LightModeOutlinedIcon
            sx={{ fontSize: 19 }}
            style={{ color: "white" }}
          ></LightModeOutlinedIcon>
        </span>
      </div>
    </main>

    <main className="bad82">
      <span className="weight82">4</span> <span>medium</span>
    </main>

    <div className="numberline-center">
      <NumberLine />
      <UVIndexLoading />
    </div>
  </article>

  )
}
export default UVIndex