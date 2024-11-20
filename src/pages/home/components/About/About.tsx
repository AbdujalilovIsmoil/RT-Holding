import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import style from "./style.module.css";
import { AboutIcon } from "../../../../assets/images/svg";
import {
  AboutImage1,
  AboutImage2,
  AboutImage3,
} from "../../../../assets/images/png";

const About = () => {
  return (
    <section className={classNames(style["about"])}>
      <div className="container">
        <div className={classNames(style["about__content"])}>
          <h2 className={classNames(style["about__content-title"])}>
            About us
          </h2>
          <p className={classNames(style["about__content-text"])}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.....
          </p>
        </div>
      </div>

      <div className={classNames(style["about__background"])}>
        <div className={classNames(style["about__container"], "container")}>
          <div className={classNames(style["about__images-container"])}>
            <Image
              width={460}
              height={370}
              alt="image name"
              src={AboutImage1}
              className={classNames(style["about__images-container-image"])}
            />
            <Image
              width={320}
              height={255}
              alt="image name"
              src={AboutImage2}
              className={classNames(style["about__images-container-image"])}
            />
            <Image
              width={260}
              height={210}
              alt="image name"
              src={AboutImage3}
              className={classNames(style["about__images-container-image"])}
            />
          </div>

          <div className={classNames(style["about__box"])}>
            <div className={classNames(style["about__questions"])}>
              <div className={classNames(style["about__question"])}>
                <h3 className={classNames(style["about__question-title"])}>
                  What We Do!
                </h3>
                <p className={classNames(style["about__question-text"])}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>

                <ul className={classNames(style["about__answers-list"])}>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div>
              <div className={classNames(style["about__question"])}>
                <h3 className={classNames(style["about__question-title"])}>
                  Lorem Ipsum Dolor
                </h3>

                <ul className={classNames(style["about__answers-list"])}>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit amet
                    </p>
                  </li>
                  <li className={classNames(style["about__anwers-item"])}>
                    <Image
                      alt="icon"
                      width={18}
                      height={12}
                      src={AboutIcon}
                      className={classNames(style["about__answers-item-icon"])}
                    />
                    <p
                      className={classNames(style["about__answers-item-text"])}
                    >
                      Lorem ipsum dolor sit
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              type="button"
              href="/pages/about"
              className={classNames(style["about__box-btn"])}
            >
              Lorem ipsum dolor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
