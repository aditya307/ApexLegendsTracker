import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const ActiveLegend = () => {
  const apexContext = useContext(ApexContext);
  const {
    gamer,
    Lifeline,
    Wraith,
    Crypto,
    Mirage,
    Bloodhound,
    Bangalore,
    Octane,
    Wattson,
    Caustic,
    Gibraltar,
    Pathfinder,
    Loba,
    Revenant,
  } = apexContext;
  const { segments } = gamer;

  const LegendImage = (legendName) => {
    switch (legendName) {
      case "Lifeline":
        return Lifeline;
      case "Wraith":
        return Wraith;
      case "Crypto":
        return Crypto;
      case "Mirage":
        return Mirage;
      case "Bloodhound":
        return Bloodhound;
      case "Bangalore":
        return Bangalore;
      case "Octane":
        return Octane;
      case "Wattson":
        return Wattson;
      case "Caustic":
        return Caustic;
      case "Gibraltar":
        return Gibraltar;
      case "Pathfinder":
        return Pathfinder;
      case "Loba":
        return Loba;
      case "Revenant":
        return Revenant;
      default:
        return null;
    }
  };

  const LegendDiv = (segmentValue) => {
    return (
      <div>
        <img
          src={LegendImage(segments[segmentValue].metadata.name)}
          alt=""
          className="ui card"
          style={{ height: "438px", width: "290px", margin: "30px" }}
        />
        <div
          className="ui raised card"
          style={{
            height: "100px",
            width: "290px",
            margin: "30px",
            backgroundColor: "#333333",
            color: "#EFEFEF",
          }}
        >
          <div style={{ display: "flex" }}>
            {segments[segmentValue].stats.kills ? (
              <div style={{ margin: "10px" }}>
                <h3>Kills</h3>
                <h1 style={{ marginTop: "-20px", fontSize: "45px" }}>
                  {" "}
                  {segments[segmentValue].stats.kills.displayValue}
                </h1>
              </div>
            ) : null}
            {segments[segmentValue].stats.season5Kills ? (
              <div style={{ margin: "10px", marginLeft: "30px" }}>
                <h3>Season 5 Kills</h3>
                <h1 style={{ marginTop: "-20px", fontSize: "45px" }}>
                  {" "}
                  {segments[segmentValue].stats.season5Kills.displayValue}
                </h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#701C1C",
          alignContent: "center",
        }}
      >
        <div
          style={{ display: "flex", marginLeft: "40px", marginRight: "40px" }}
        >
          {segments[1] ? LegendDiv(1) : null}

          {segments[2] ? LegendDiv(2) : null}

          {segments[3] ? LegendDiv(3) : null}
        </div>

        <div
          style={{ display: "flex", marginLeft: "40px", marginRight: "40px" }}
        >
          {segments[4] ? LegendDiv(4) : null}

          {segments[5] ? LegendDiv(5) : null}

          {segments[6] ? LegendDiv(6) : null}
        </div>
      </div>
    </div>
  );
};

export default ActiveLegend;
