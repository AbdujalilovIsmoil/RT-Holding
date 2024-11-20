import Link from "next/link";
import classNames from "classnames";
import { Button } from "@/Components";
import style from "./style.module.css";
import {
  FaFacebook,
  IoLogoInstagram,
  FaTelegramPlane,
} from "@/assets/react-icons";

const Hero = () => {
  return (
    <header className={classNames(style["header"])}>
      <section className={classNames(style["site-hero"])}>
        <h1 className="visually-hidden">RT Holdings</h1>
        <div className={classNames(style["site__navigation"])}>
          <div className={classNames(style["site__container"], "container")}>
            <nav className={classNames(style["nav"])}>
              <ul className={classNames(style["nav__list"])}>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/"
                    className={classNames(
                      style["nav__item-link"],
                      "nav__item-link--active"
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/pages/about"
                    className={classNames(style["nav__item-link"])}
                  >
                    About Us
                  </Link>
                </li>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/pages/projects"
                    className={classNames(style["nav__item-link"])}
                  >
                    Projects
                  </Link>
                </li>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/pages/news"
                    className={classNames(style["nav__item-link"])}
                  >
                    News
                  </Link>
                </li>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/pages/sale"
                    className={classNames(style["nav__item-link"])}
                  >
                    Sale
                  </Link>
                </li>
                <li className={classNames(style["nav__item"])}>
                  <Link
                    href="/pages/contact"
                    className={classNames(style["nav__item-link"])}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className={classNames(style["site__contact"])}>
              <ul className={classNames(style["site__medias"])}>
                <li className={classNames(style["site__meda"])}>
                  <a href="#" target="_blank">
                    <IoLogoInstagram
                      className={classNames(style["site__media-icon"])}
                    />
                  </a>
                </li>
                <li className={classNames(style["site__meda"])}>
                  <a href="#" target="_blank">
                    <FaFacebook
                      className={classNames(style["site__media-icon"])}
                    />
                  </a>
                </li>
                <li className={classNames(style["site__meda"])}>
                  <a href="#" target="_blank">
                    <FaTelegramPlane
                      className={classNames(style["site__media-icon"])}
                    />
                  </a>
                </li>
              </ul>
              <a className={classNames(style["site__contact-link"])} href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={classNames(style["site-hero__content"])}>
            <span className={classNames(style["site-hero__content-small"])}>
              Lorem ipsum dolor sit amet.
            </span>
            <h2 className={classNames(style["site-hero__content-title"])}>
              <span className={classNames(style["site-hero__conetent-among"])}>
                Lorem
              </span>{" "}
              ipsum dolor sit amet consectetur. Mauris eleifend dui
            </h2>

            <p className={classNames(style["site-hero__content-text"])}>
              Lorem ipsum dolor sit amet consectetur. Velit sagittis nec
              vulputate aliquet at suspendisse dui semper feugiat.
            </p>

            <div className={classNames(style["site-hero__buttons"])}>
              <Button
                type="button"
                className={classNames(
                  style["site-hero__buttons-button"],
                  style["site-hero__buttons-button--active"]
                )}
              >
                Explore Our Services
              </Button>
              <Button
                type="button"
                className={classNames(style["site-hero__buttons-button"])}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
