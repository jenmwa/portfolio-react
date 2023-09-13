import { Article } from "./styled/Articles";
import "../style/portfolio.scss";

export const PortfolioCard = () => {
  return (
    <>
      <Article className="portfolio--container">
        <div className="portfolio--upper-section">
          <div className="portfolio-img--container">
            <img src="/placeholder.webp"></img>
          </div>
          <span>KATEGORI</span>
          <h3>TITEL</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="portfolio--down-section">
          <div className="portfolio--language">
            <div>
              {/* <span className="material-symbols-outlined">star</span> */}
              <span>Language</span>
            </div>
          </div>
          <div className="portfolio--readMore">
            <a href="/">Learn More</a>
          </div>
        </div>
      </Article>
    </>
  );
};
