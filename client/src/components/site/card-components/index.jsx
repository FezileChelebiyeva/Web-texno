import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/personDataSlice";
import logo from "../../../assets/images/element.png";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
const CardPersons = () => {
  const dispatch = useDispatch();
  const personalities = useSelector((state) => state.personalities);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div id="cards-component">
      <div className="container">
        <div className="cards-component">
          <h2>Milli Qəhrəmanlar</h2>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="title">
            <p>
              Azərbaycanın ərazi bütövlüyü uğrunda xüsusi xidmətlərinə və
              qarşıya qoyulmuş döyüş tapşırığını yerinə yetirən zaman göstərdiyi
              qəhrəmanlıq nümunəsinə görə, həmçinin vəzifə borcunu yerinə
              yetirərkən igidliyin və mərdliyin nümayiş etdirilməsinə görə
              Azərbaycan Respublikasının Prezidentinin Sərəncamına əsasən
              aşağıdakı şəxslərə Azərbaycanın Milli Qəhrəmanı fəxri adı verilib.
            </p>
          </div>
          <div className="cards">
            <Swiper
              modules={[Navigation, EffectFade]}
              spaceBetween={50}
              slidesPerView={4}
              slidesPerGroup={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              speed={500}
              navigation
            >
              {personalities.data?.map((element) => {
                return (
                  <SwiperSlide key={element.id}>
                    <div key={element.id} className="card">
                      <div className="image">
                        <Link to={`/details/${element._id}`}>
                          <img src={element.image} alt="image about person" />
                        </Link>
                      </div>
                      <div className="about">
                        <Link to={`/details/${element._id}`}>
                          {element.name}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersons;
