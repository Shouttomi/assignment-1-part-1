import { UmbrellaOutlinedIcon } from "../../imports";
import Loadingpercent from "../../Loadingpercent";
import SmallLoading from "../../SmallLoading";

const Chanceofrain = () => {
  return (
    <article className="smallbox">
      <main className="humiditygrid">
        <div>Chance of rain</div>

        <div className="bluesmallestcontainer">
          <span>
            <UmbrellaOutlinedIcon
              sx={{ fontSize: 19 }}
              style={{ color: "white" }}
            ></UmbrellaOutlinedIcon>
          </span>
        </div>
      </main>

      <main className="bad82">
        <span className="weight82">42%</span>
      </main>

      <div className="numberline-center">
        <Loadingpercent />
        <SmallLoading />
      </div>
    </article>
  );
};
export default Chanceofrain;
