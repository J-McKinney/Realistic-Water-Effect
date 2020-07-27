import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./WaterEffect.css";

class WaterEffect extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="background">
            <div className="water"></div>
          </div>

          <svg>
            {/*changing the width changes the columns across the page and the effects 
           changing the height changes the rows across the page and the effects*/}
            <filter id="turbulence" x="0" y="0" width="100%" height="100%">
              {/*changing the numOctaves changes the fluid motion of the wave effects, faster=lowerNumber slower=higherNumbe 
             The baseFrequency attribute represents the base frequency parameter for the noise function of the <feTurbulence> filter primitive, Only one element is using this attribute: <feTurbulence>*/}
              <feTurbulence
                id="sea-filter"
                numOctaves="1"
                baseFrequency="0.02 0.05"
              />
              {/*wave effect is affected by scale attribute higherNumber=big shrink-little shrink 
                 where SourceGraphic(x,y) is the input image, in, and SourceGraphic'(x,y) is the destination, overlapping image to create that wave effect */}
              <feDisplacementMap scale="20" in="SourceGraphic" />
              {/*xlink:href="#sea-filter", creates the 2 images to overlap and make it look like the ocean is moving
                attributeName="baseFrequency", links up with the dur(duration time) and keyTimes
                the values mess with the amount of wave in-between each wave effect differently
                the repeat count, I hope. is obvious*/}
              <animate
                href="#sea-filter"
                attributeName="baseFrequency"
                dur="30s"
                keyTimes="0;0.5;1"
                values="0.02 0.06;0.04 0.08;0.02 0.06"
                repeatCount="indefinite"
              />
            </filter>
          </svg>
        </Container>
      </>
    );
  }
}

export default WaterEffect;
