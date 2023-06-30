import {Chanceofrain} from "./imports";
import {FeelsLike} from "./imports";
import {Humidity} from "./imports";
import {Precipitation} from "./imports";
import {UVIndex} from "./imports";
import {Wind} from "./imports";


const Lightbluesecondsection = () => {
  return (
    <main className="secondsection">
      <div className="moredetails">
        <div>More details of today's weather</div>
      </div>

      <main className="smallboxgrid">
        <Humidity />
        <Wind />
        <Precipitation />
        <UVIndex />
        <FeelsLike />
        <Chanceofrain />
      </main>
    </main>
  );
};
export default Lightbluesecondsection;
