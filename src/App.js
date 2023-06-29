import "./index.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import AirSharpIcon from "@mui/icons-material/AirSharp";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import UmbrellaOutlinedIcon from "@mui/icons-material/UmbrellaOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";

const App = () => {
  return (
    <div className="content">
      <main className="totalsize">
        <div className="blue">
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

          <article className="newyorkgrid">
            <div className="newyorkflex">

              <div className="usaflex">

              <main className="windrotate">
                <SendOutlinedIcon
                  sx={{ fontSize: 15 }}
                  style={{ color: "white" }}
                  ></SendOutlinedIcon>
              </main>
              <span>New York,USA</span>
                  </div>

              <div>
              <WbTwilightOutlinedIcon
                sx={{ fontSize: 14 }}
                style={{ color: "white" }}
              ></WbTwilightOutlinedIcon>

              <span> 07:19</span>
            </div>
            </div>
            
            <div className=" newyorkflex2">


            <div className="smallfont">Today 28 Sept</div>
            <div>
              <WbTwilightOutlinedIcon
                sx={{ fontSize: 14 }}
                style={{ color: "white" }}
                ></WbTwilightOutlinedIcon>
              <span> 19:32</span>
            </div>

                </div>
            
          </article>

          <div className="lightblue">
            <main className="firstsection">
              <article className="grid1">
                <div className="welcomeback">
                  <h2>welcome back isabella! </h2>
                  <h3>check out today's weather information </h3>
                </div>

                <div className="flex1">
                  <MoreHorizIcon sx={{ fontSize: 30 }}></MoreHorizIcon>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.jG20xZ4rIJfvN9q5oN2OBwHaEo&pid=Api&P=0&h=180"
                    alt=""
                  />
                </div>
              </article>

              <article className="graph">
                <article className="upcominghours">
                  <h3>Upcoming hours</h3>

                  <div className="flex2">
                    <div className="grey flexnext">
                      <div className="rain">Rain Precipitation</div>

                      <KeyboardArrowDownIcon
                        sx={{ fontSize: 20 }}
                      ></KeyboardArrowDownIcon>
                    </div>

                    <div className="grey flexnext">
                      <div className="rain">next days</div>
                      <KeyboardArrowRightIcon
                        sx={{ fontSize: 20 }}
                      ></KeyboardArrowRightIcon>
                    </div>
                  </div>
                </article>

                <main className="suncloudbox">
                  <article className="time">
                    <div className="timeflex">Now</div>
                    <div className="timeflex">11:00</div>
                    <div className="timeflex">12:00</div>
                    <div className="timeflex">13:00</div>
                    <div className="timeflex">14:00</div>
                    <div className="timeflex">15:00</div>
                    <div className="timeflex">16:00</div>
                    <div className="timeflex">17:00</div>
                  </article>

                  <article className="weather">
                    <div className="timeflex2">
                      <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    </div>
                    <div className="timeflex2">
                      <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    </div>
                    <div className="timeflex2">
                      <CloudIcon></CloudIcon>
                    </div>
                    <div className="timeflex2">
                      <CloudIcon></CloudIcon>
                    </div>
                    <div className="timeflex2">
                      <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    </div>
                    <div className="timeflex2">
                      <CloudIcon></CloudIcon>
                    </div>
                    <div className="timeflex2">
                      <CloudIcon></CloudIcon>
                    </div>
                    <div className="timeflex2">
                      <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    </div>
                  </article>

                  <article className="temperature">
                    <div className="timeflex2">
                      27<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      28<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      28<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      29<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      30<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      29<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      29<span>&#176;</span>
                    </div>
                    <div className="timeflex2">
                      30<span>&#176;</span>
                    </div>
                  </article>
                </main>

                <main className="zizac">
                  <main className="line">
                    <div className="border1 timeflex2"></div>
                    <div className="b1after"> </div>

                    <div className="border2 timeflex2"></div>
                    <div className="b2after"> </div>

                    <div className="border3 timeflex2"></div>
                    <div className="b3after"> </div>

                    <div className="border4 timeflex2"></div>
                    <div className="b4after"> </div>

                    <div className="border5 timeflex2"></div>
                    <div className="b5after"> </div>

                    <div className="border6 timeflex2"></div>
                    <div className="b6after"> </div>

                    <div className="border7 timeflex2"></div>
                    <div className="b7after"> </div>

                    <div className="border8 timeflex2"></div>
                  </main>

                  <article className="temperature2">
                    <div className="timeflex2">
                      23<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      29<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      58<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      75<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      33<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      20<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      73<span>&#x25;</span>
                    </div>
                    <div className="timeflex2">
                      49<span>&#x25;</span>
                    </div>
                  </article>
                </main>
              </article>
            </main>

            <main className="secondsection">
              <div className="moredetails">
                <div>More details of today's weather</div>
              </div>

              <main className="smallboxgrid">
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
                      <div className="mainloading mainloading-letter ">
                        good
                      </div>
                      <div className="mainloading mainloading-letter ">
                        normal
                      </div>
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

                    <div className="counter">
                      <span className="commonsmall zero">0</span>
                      <span className="commonsmall five">5</span>
                      <span className="commonsmall ten">10</span>
                      <span className="commonsmall twenty">20</span>
                      <span className="commonsmall thirty">30</span>
                      <span className="commonsmall fourty">40</span>
                    </div>
                  </main>
                </article>

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
                    <main className="small-loading small-loading-extra">
                      <div className="mainloading mainloading-numbers">0</div>
                      <div className="mainloading mainloading-numbers">10</div>
                      <div className="mainloading mainloading-numbers">20</div>
                      <div className="mainloading mainloading-numbers">30</div>
                      <div className="mainloading mainloading-numbers">40</div>
                      <div className="mainloading mainloading-numbers">50</div>
                      <div className="mainloading mainloading-numbers">60</div>
                      <div className="mainloading mainloading-numbers">70</div>
                      <div className="mainloading mainloading-numbers">80</div>
                      <div className="mainloading mainloading-numbers">90</div>
                    </main>

                    <main className="small-loading">
                      <div className="mainloading mainloading-size small-loadingbgcolor"></div>
                      <div className="mainloading mainloading-size">
                        <span className="halfcolor"></span>
                      </div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                      <div className="mainloading mainloading-size"></div>
                    </main>
                  </div>
                </article>

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
                    <main className="small-loading small-loading-extra UVIndexgap">
                      <div className="mainloading mainloading-letter fitcontent">
                        1-2
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        3-5
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        6-7
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        8-10
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        11+
                      </div>
                    </main>

                    <main className="small-loading UVIndexgap">
                      <div className="mainloading UVIndexloading-size small-loadingbgcolor"></div>

                      <div className="mainloading UVIndexloading-size">
                        <span className="quartercolor"></span>
                      </div>
                      <div className="mainloading UVIndexloading-size "></div>
                      <div className="mainloading UVIndexloading-size "></div>
                      <div className="mainloading UVIndexloading-size "></div>
                    </main>
                  </div>
                </article>

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
                    <main className="small-loading small-loading-extra feelslikegap">
                      <div className="mainloading mainloading-letter ">
                        0&#xb0;
                      </div>
                      <div className="mainloading mainloading-letter ">
                        25&#xb0;
                      </div>
                      <div className="mainloading mainloading-letter ">
                        50&#xb0;
                      </div>
                    </main>

                    <main className="small-loading ">
                      <div className="mainloading firstloading-size full-loading">
                        <span className="threefourthcolor"></span>
                      </div>
                    </main>
                  </div>
                </article>

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
                    <span className="weight82">4</span> <span>medium</span>
                  </main>

                  <div className="numberline-center">
                    <main className="small-loading small-loading-extra UVIndexgap">
                      <div className="mainloading mainloading-letter fitcontent">
                        0%
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        25%
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        50%
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        75%
                      </div>
                      <div className="mainloading mainloading-letter fitcontent">
                        100%
                      </div>
                    </main>

                    <main className="small-loading ">
                      <div className="mainloading firstloading-size full-loading">
                        <span className="quartercolor"></span>
                      </div>
                    </main>
                  </div>
                </article>
              </main>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
