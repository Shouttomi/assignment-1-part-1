const Loadingpercent = () => {

    const loadingPercentages = ["0%", "25%", "50%", "75%", "100%"];

  return (
    <main className="small-loading small-loading-extra UVIndexgap">
    {loadingPercentages.map((percentage, index) => (
      <div className="mainloading mainloading-letter fitcontent" key={index}>
        {percentage}
      </div>
    ))}
  </main>
  )
}
export default Loadingpercent