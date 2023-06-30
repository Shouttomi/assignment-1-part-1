const TimeComponent = () => {

    const times = ["Now", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
  return (
    <article className="time">
    {times.map((time, index) => (
      <div className="timeflex" key={index}>
        {time}
      </div>
    ))}
  </article>
  )
}
export default TimeComponent