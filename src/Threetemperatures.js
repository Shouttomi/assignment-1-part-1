const Threetemperatures = () => {
    const temperatures = [0, 25, 50];

  return (
    <main className="small-loading small-loading-extra feelslikegap">
    {temperatures.map((temperature, index) => (
      <div className="mainloading mainloading-letter" key={index}>
        {temperature}&#xb0;
      </div>
    ))}
  </main>
  )
}
export default Threetemperatures