
  import React from "react";



const LineComponent = () => {

    const borders = [
        { border: 1, after: "b1after" },
        { border: 2, after: "b2after" },
        { border: 3, after: "b3after" },
        { border: 4, after: "b4after" },
        { border: 5, after: "b5after" },
        { border: 6, after: "b6after" },
        { border: 7, after: "b7after" },
        { border: 8, after: undefined }
      ];
    

  return (
    <main className="line">
    {borders.map(({ border, after }, index) => (
      <React.Fragment key={index}>
        <div className={`border${border} timeflex2`}></div>
        {after && <div className={after}></div>}
      </React.Fragment>
    ))}
  </main>
  )
}
export default LineComponent