import React from "react";
import "./index.scss";
import { Carousel } from "antd";
import image from "../../assets/images/history3.jpg";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HomePage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div id="home">
      <section id="fisrt-section">
        <Carousel afterChange={onChange}>
          <div className="img2">
            <div className="titles">
              <div className="text">
                <h4>
                  Qüvvət elmdədir, başqa cür heç kəs <br />
                  Heç kəsə üstünlük eyləyə bilməz.{" "}
                </h4>
                <p>Nizami Gəncəv</p>
              </div>
            </div>
          </div>
          <div className="img">
            <div className="titles">
              <div className="text">
                <h4>Xalq gərək daim öz kökünü xatırlasın.</h4>
                <p>Ümummilli lider Heydər Əliyev</p>
              </div>
            </div>
          </div>
          <div className="img3">
            <div className="titles">
              <div className="text">
                <h4>Az bilib,çox danışmaq axmaqlıq əlamətidir.</h4>
                <p>Seyid Əzim Şirvani</p>
              </div>
            </div>
          </div>
          <div className="img4">
            <div className="titles">
              <div className="text">
                <h4>Olmasaydı sarsaqlar, ac qalardı yaltaqlar.</h4>
                <p>Mirzə Ələkbər Sabir</p>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;
