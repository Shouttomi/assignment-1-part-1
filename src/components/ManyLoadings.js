const ManyLoadings = () => {

    const loadingElements = [
        { className: "mainloading mainloading-size small-loadingbgcolor" },
        { className: "mainloading mainloading-size", children: <span className="halfcolor"></span> },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" },
        { className: "mainloading mainloading-size" }
      ];

  return (
    <main className="small-loading">
    {loadingElements.map((element, index) => (
      <div {...element} key={index} />
    ))}
  </main>

  )
}
export default ManyLoadings