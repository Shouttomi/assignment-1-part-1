const Temperature1 = () => {


    const temperatures = [27, 28, 28, 29, 30, 29, 29, 30];
  return (
    <article className="temperature">
    {temperatures.map((temperature, index) => (
      <div className="timeflex2" key={index}>
        {temperature}&#176;
      </div>
    ))}
  </article>
  )
}
export default Temperature1