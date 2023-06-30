const NumberLine = () => {
    const uvIndexRanges = ['1-2','3-5','6-7','8-10','11+']
  return (
    <main className="small-loading small-loading-extra UVIndexgap">
    {uvIndexRanges.map((range, index) => (
      <div className="mainloading mainloading-letter fitcontent" key={index}>
        {range}
      </div>
    ))}
  </main>
  )
}
export default NumberLine