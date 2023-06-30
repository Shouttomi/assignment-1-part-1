import {UpcomingHours} from "../../components"
import {Weather} from "../../components"
import {Temperature1} from "../../components"
import {LineComponent} from "../../components"
import {TimeComponent} from "../../components"
import {Temperature2} from "../../components"

const Graph = () => {
  return (
    <article className="graph">
    <UpcomingHours />

    <main className="suncloudbox">
      <TimeComponent />
      <Weather />
      <Temperature1 />
    </main>

    <main className="zizac">
      <LineComponent />
      <Temperature2 />
    </main>
  </article>
  )
}
export default Graph