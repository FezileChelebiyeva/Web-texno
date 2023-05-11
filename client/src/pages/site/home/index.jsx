import React from "react";
import "./index.scss";
import { Carousel } from "antd";
import CardPersons from "../../../components/site/card-components";
import flag from "../../../assets/images/army5.jpg";
import flag2 from "../../../assets/images/army7.jpg";
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
                <h4>Qəhrəmanlıq qəhrəmanla birlikdə ölmür, əbədi yaşayır.</h4>
                <p>Evripid</p>
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
                <h4>Qəhrəmanlıqla ölmək insana əbədi həyat qazandırır. </h4>
                <p>Cordano Bruno</p>
              </div>
            </div>
          </div>
          <div className="img4">
            <div className="titles">
              <div className="text">
                <h4>
                  Dünya tarixində ən böyük hünər və qəhrəmanlıqlar vətən naminə
                  edilib.
                </h4>
                <p>Jan Jak Russo</p>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="img">
              <img src={flag} alt="" />
            </div>
            <div className="text">
              Azərbaycan xalqı Tarixini yaradan şəxsiyyətlərlə, Vətənin azadlığı
              naminə canını fəda edən oğul və qızlarımızla haqlı olaraq həmişə
              öyünmüşdür. Bu gün Azərbaycanda Vətən hamı üçün müqəddəsdir və bu
              müqəddəsliyin uğrunda canından keçməyə hazır olan oğullarımız
              Vətənin müdafiəsinə qalxmışdır. Bu gün Azərbaycan əsgəri Ali Baş
              Komandanının rəhbərliyi ilə Azərbaycanın şanlı tarixini yazır.
              Qəhrəmanlar heç vaxt unudulmur. Dövlətimiz və xalqımız ana Vətənin
              azadlığı, müqəddəs torpağın şərəfi yolunda canını qurban verənləri
              həmişə qəlbində yaşadır, onları şərəf və qeyrət simvolu kimi
              xatırlayır, gənc nəslə nümunə kimi təqdim edir. Son dövrlərin
              Qarabağ savaşı bir daha göstərdi ki, Müstəqil Azərbaycan doğrudan
              da, qəhrəmanlar diyarı, igidlər və cəsurlar məskənidir.
            </div>
          </div>
        </div>
      </section>
      <section id="background"></section>
      <section id="about2">
        <div className="container">
          <div className="about2">
            <div className="text">
              Dövlətimizin, torpaqlarımızın bütövlüyü, azadlığı uğrunda
              rəşadətlə mübarizə aparan, canını fəda edən qəhrəman oğullarımızın
              xatirəsinin əbədiləşdirilməsi məqsədilə informasiya bazasının
              yaradılması mühüm məsələlərdən sayılır. Bu məqsədlə, M.F.Axundzadə
              adına Azərbaycan Milli Kitabxanasının əməkdaşları tərəfindən
              “Azərbaycanın Milli Qəhrəmanları” adlı Elektron məlumat bazası
              hazırlanıb. Elektron məlumat bazasında Azərbaycanın müstəqilliyi,
              suverenliyi uğrunda rəşadətlə döyüşən və canından keçən Milli
              Qəhrəmanlar haqqında məlumatlar əks olunub. Bu gün ölkəmizdə əsl
              Vətən Müharibəsinin getdiyi bir zamanda belə bir bazanın təqdim
              olunması xüsusilə əhəmiyyətlidir və gənc əsgərlərimizi qələbəyə
              daha da ruhlandırır. Qələbə bizimlədir, Azərbaycan əsgəri!
            </div>
            <div className="img">
              <img src={flag2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="card-persons">
        <CardPersons />
      </section>
      <section id="background2"></section>
    </div>
  );
};

export default HomePage;
