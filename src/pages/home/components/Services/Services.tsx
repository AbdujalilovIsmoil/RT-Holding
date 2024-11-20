import Link from "next/link";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import classNames from "classnames";
import style from "./style.module.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiteCardLogo } from "@/assets/images/svg";
import { ServicesImage4 } from "@/assets/images/png";

const Services = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(0deg, rgba(28, 28, 28, 0.5) 0%, rgba(28, 28, 28, 0) 50%), url(${ServicesImage4})`,
  };

  return (
    <section className={classNames(style["services"])}>
      <div className="container">
        <div className={classNames(style["services__content"])}>
          <span className={classNames(style["services__content-small"])}>
            Lorem ipsum dolor sit amet.
          </span>
          <h2 className={classNames(style["services__content-title"])}>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>

        <Swiper
          loop
          grabCursor
          slidesPerView={3}
          spaceBetween={20}
          modules={[Autoplay]}
          className={classNames(style["services-cards"])}
          autoplay={{
            delay: 2500,
          }}
        >
          <SwiperSlide>
            <div
              style={backgroundStyle}
              className={classNames(style["services-card"])}
            >
              <div className={classNames(style["services-card__content"])}>
                <h2
                  className={classNames(style["services-card__content-title"])}
                >
                  Innovative technologies
                </h2>
                <p className={classNames(style["services-card__content-text"])}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className={classNames(style["services-card__footer"])}>
                <div className={classNames(style["services-card__box"])}>
                  <Link href="/">
                    <Image
                      priority
                      height={44}
                      width={130}
                      alt="RT Holdings"
                      src={SiteCardLogo}
                      className={classNames(
                        style["services-card__footer-image"]
                      )}
                    />
                  </Link>
                </div>
                <Link
                  href="/"
                  className={classNames(style["services-card__footer-btn"])}
                >
                  Lorem ipsum
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
