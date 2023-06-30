const UVIndexLoading = () => {
    const loadingElements = [
        { className: "mainloading UVIndexloading-size small-loadingbgcolor" },
        { className: "mainloading UVIndexloading-size", children: <span className="quartercolor"></span> },
        { className: "mainloading UVIndexloading-size" },
        { className: "mainloading UVIndexloading-size" },
        { className: "mainloading UVIndexloading-size" }
      ];
  return (
    <main className="small-loading UVIndexgap">
    {loadingElements.map((element, index) => (
      <div {...element} key={index} />
    ))}
  </main>
  )
}
export default UVIndexLoading