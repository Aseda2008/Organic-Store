// Home.jsx
import React, { useContext, useState } from "react";
import { OrganickContext } from "../../context";
import text from "../../assets/img/text.svg";
import img1 from "../../assets/img/1.svg";
import img2 from "../../assets/img/2.svg";
import img3 from "../../assets/img/Photo (2).svg";
import img4 from "../../assets/img/3.svg";
import img5 from "../../assets/img/icon.svg";
import img6 from "../../assets/img/icon (1).svg";
import img7 from "../../assets/img/Offer.svg";
import img8 from "../../assets/img/image.svg";
import img9 from "../../assets/img/img1.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { FaCircleArrowRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const Home = () => {
  const { organick } = useContext(OrganickContext);
  const [count, setCount] = useState(3);
  return (
    <>
      <section id="home">
        <div className="blocks">
          <div className="blocks--block2">
            <img src={img1} alt="img" data-aos="fade-right" />
            <img src={img2} data-aos="fade-left" />
          </div>
        </div>
        <div class="working">
          <div class="working--block">
            <img
              src={img3}
              alt="img"
              style={{
                width: "clamp(10rem,50vw, 51rem)",
              }}
            />
            <div class="working--block__text">
              <img
                src={img4}
                alt="img"
                style={{
                  width: "clamp(3rem, 7vw, 7.1rem)",
                }}
              />
              <h2>
                We Believe in Working <br />
                Accredited Farmers
              </h2>
              <p>
                Simply dummy text of the printing and typesetting industry.
                <br /> Lorem had ceased to been the industry's standard dummy
                text <br />
                ever since the 1500s, when an unknown printer took a galley.
              </p>
              <div class="working--block__text--card">
                <img
                  src={img5}
                  alt="img"
                  style={{
                    width: "clamp(3rem, 7vw, 7.1rem)",
                  }}
                />
                <div class="working--block__text--card__foods">
                  <h3>Organic Foods Only</h3>
                  <p>
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </p>
                </div>
              </div>
              <div class="working--block__text--card">
                <img
                  src={img6}
                  alt="img"
                  style={{
                    width: "clamp(3rem, 7vw, 7.1rem)",
                  }}
                />
                <div class="working--block__text--card__foods">
                  <h3>Organic Foods Only</h3>
                  <p>
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </p>
                </div>
              </div>
              <Link to={"/ShopNow"}>
                <button>
                  Shop Now <MdOutlineArrowRightAlt />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <center>
            <img src={text} alt="img" />
            <h1>Our Products</h1>
          </center>
          <div className="home">
            {organick?.slice(0, count).map((el) => (
              <Product el={el} />
            ))}
          </div>
          <center>
            {count < organick.length ? (
              <button onClick={() => setCount(count + 3)}>
                Load More
                <MdOutlineArrowRightAlt />
              </button>
            ) : (
              <button>Finished</button>
            )}
          </center>
        </div>
        <div className="organick">
          <div className="organick--top">
            <div class="organick--top__cards">
              <div class="organick--top__cards--card">
                <img src={img7} alt="img" />
                <h1>We Offer Organic For You</h1>
              </div>
              <button>
                View All Product
                <FaCircleArrowRight />
              </button>
            </div>
            <div class="organick--top__block">
              {organick?.slice(0, count).map((el) => (
                <Product el={el} />
              ))}
              <center>
                {count < organick.length ? (
                  <button onClick={() => setCount(count + 3)}>
                    <MdOutlineArrowRightAlt />
                  </button>
                ) : (
                  <button>
                    <GrClose />
                  </button>
                )}
              </center>
            </div>
          </div>
        </div>
        <div class="store">
          <img src={img8} alt="img" style={{
                height: "clamp(20rem, 58vw, 58.1rem)",
                width: "clamp(20rem, 58vw, 58.1rem)",
          }}/>
          <div class="store--block">
<img src={img9} alt="img"
                style={{
                  width: "clamp(3rem, 7vw, 7.1rem)",
                }}/>
            <h2>Econis is a Friendly <br/>
            Organic Store</h2>
            <h3>Start with Our Company First</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br/>doloremque laudantium. Sed ut perspiciatis.</p>
            <h3>Learn How to Grow Yourself</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br/>doloremque laudantium. Sed ut perspiciatis.</p>
            <h3>Farming Strategies of Today</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br/>doloremque laudantium. Sed ut perspiciatis.</p>
</div>
          </div>
      </section>
    </>
  );
};

export default Home;
