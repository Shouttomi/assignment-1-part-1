import { KeyboardArrowDownIcon,KeyboardArrowRightIcon } from "../imports"

const UpcomingHours = () => {
  return (
<article className="upcominghours">
          <h3>Upcoming hours</h3>

          <div className="flex2">
            <div className="lightgrey flexnext">
              <div className="rain">Rain Precipitation</div>

              <KeyboardArrowDownIcon
                sx={{ fontSize: 20 }}
              ></KeyboardArrowDownIcon>
            </div>

            <div className="grey flexnext">
              <div className="rain">Next days</div>
              <KeyboardArrowRightIcon
                sx={{ fontSize: 20 }}
              ></KeyboardArrowRightIcon>
            </div>
          </div>
        </article>
  )
}
export default UpcomingHours