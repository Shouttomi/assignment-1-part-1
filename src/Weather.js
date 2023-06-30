
import { LightModeOutlinedIcon,CloudIcon } from "./imports";
const Weather = () => {

    const weatherIcons = [
        <LightModeOutlinedIcon />,
        <LightModeOutlinedIcon />,
        <CloudIcon />,
        <CloudIcon />,
        <LightModeOutlinedIcon />,
        <CloudIcon />,
        <CloudIcon />,
        <LightModeOutlinedIcon />
      ];
  return (
    <article className="weather">
    {weatherIcons.map((icon, index) => (
      <div className="timeflex2" key={index}>
        {icon}
      </div>
    ))}
  </article>
  )
}
export default Weather