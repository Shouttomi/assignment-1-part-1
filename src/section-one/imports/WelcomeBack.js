import { MoreHorizIcon } from "../../imports"

const WelcomeBack = () => {
  return (
<article className="grid1">
        <div className="welcomeback">
          <h2 className="boldwelcome">Welcome back Isabella! </h2>
          <h3>Check out today's weather information </h3>
        </div>

        <div className="flex1">
          <MoreHorizIcon sx={{ fontSize: 30 }}></MoreHorizIcon>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.jG20xZ4rIJfvN9q5oN2OBwHaEo&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
      </article>

  )
}
export default WelcomeBack