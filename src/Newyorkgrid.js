
import { SendOutlinedIcon,WbTwilightOutlinedIcon } from "./imports"

const Newyorkgrid = () => {
  return (
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

  )
}
export default Newyorkgrid