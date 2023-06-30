
import { KeyboardArrowLeftOutlined,KeyboardArrowRight } from "./imports"

const Bigtemperature = () => {
  return (
    <article className="sunny">
    <KeyboardArrowLeftOutlined
      sx={{ fontSize: 30 }}
      style={{ color: "white" }}
    ></KeyboardArrowLeftOutlined>

    <main className="bold27">
      27
      <div className="smalldegree">&#xb0;</div>
    </main>

    <KeyboardArrowRight
      sx={{ fontSize: 30 }}
      style={{ color: "white" }}
    ></KeyboardArrowRight>
  </article>
  )
}
export default Bigtemperature