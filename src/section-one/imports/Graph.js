import UpcomingHours from "../../UpcomingHours"
import Weather from "../../Weather"
import Temperature1 from "../../Temperature1"
import LineComponent from "../../LineComponent"
import TimeComponent from "../../TimeComponent"
import Temperature2 from "../../Temperature2"

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