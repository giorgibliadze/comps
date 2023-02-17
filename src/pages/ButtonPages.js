import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoCloudUpload } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };
  const handleMouseOver = () => {};
  return (
    <div>
      <div>
        <Button
          success
          rounded
          outline
          onClick={handleClick}
          onMouseOver={handleMouseOver}
        >
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload /> Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudUpload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Something!
        </Button>
        <div>
          <Button primary rounded>
            Something!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
