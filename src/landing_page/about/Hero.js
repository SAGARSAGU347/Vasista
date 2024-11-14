import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center mb-5">
        We redefined the eSports experience in India.



          <br />
          Now, we are taking it to new heights.
        </h1>

        <div
          className="row p-5 mt-5  border-top text-muted fs-6 "
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-5">
            <p>
              We kick-started operations on the 15th of August, 2015 with the
              goal of breaking all barriers that gamers and eSports enthusiasts
              face in India in terms of accessibility, support, and technology.
              We named the company PlayRiot, symbolizing the dynamic and
              competitive spirit of gaming.
            </p>
            <p>
              Today, our disruptive tournament models and in-house gaming
              technology have made us the biggest eSports platform in India.
            </p>
            <p>
              Over 1+ million players engage in various gaming tournaments every
              day through our powerful ecosystem of gaming platforms,
              contributing significantly to the Indian eSports scene.
            </p>
          </div>
          <div className="col-6 p-5">
            <p>
              In addition, we run several popular open online educational and
              community initiatives to empower gamers and foster new talent.
            </p>
            <p>
            
              GameBoost, our eSports fund and incubator, has invested in several
              eSports startups with the goal of expanding the Indian gaming
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
