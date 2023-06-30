const Temperature2 = () => {
    const temperatures = [23, 29, 58, 75, 33, 20, 73, 49];
  
    return (
    <article className="temperature2">
    {temperatures.map((temperature, index) => (
      <div className="timeflex2" key={index}>
        {temperature}&#x25;
      </div>
    ))}
  </article>
  )
}
export default Temperature2