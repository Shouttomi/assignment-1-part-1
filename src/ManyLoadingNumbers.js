const ManyLoadingNumbers = () => {
    const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    
  return (
<main className="small-loading small-loading-extra">
    {numbers.map((number, index) => (
      <div className="mainloading mainloading-numbers" key={index}>
        {number}
      </div>
    ))}
  </main>
  )
}
export default ManyLoadingNumbers