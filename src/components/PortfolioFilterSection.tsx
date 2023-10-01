import { Button } from "./styled/Buttons";

export const PortfolioFilterSection = () => {
  return (
    <>
      <div id="my-btn-container">
        <Button style={{ display: "inline" }} className="btn active">
          {" "}
          Visa alla
        </Button>
        <Button style={{ display: "inline" }} className="btn">
          {" "}
          Kod
        </Button>
        <Button style={{ display: "inline" }} className="btn">
          {" "}
          Grafiskt
        </Button>
      </div>
    </>
  );
};
