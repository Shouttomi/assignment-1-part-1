const GaugeNumbers = () => {
    const counters = [
        { className: "commonsmall zero", value: 0 },
        { className: "commonsmall five", value: 5 },
        { className: "commonsmall ten", value: 10 },
        { className: "commonsmall twenty", value: 20 },
        { className: "commonsmall thirty", value: 30 },
        { className: "commonsmall fourty", value: 40 }
      ];
  return (
    <div className="counter">
      {counters.map((counter, index) => (
        <span className={counter.className} key={index}>
          {counter.value}
        </span>
      ))}
    </div>
  )
}
export default GaugeNumbers