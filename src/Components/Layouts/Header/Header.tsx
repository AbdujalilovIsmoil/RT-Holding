import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import style from "./style.module.css";
import { siteLogo } from "../../../assets/images/svg";
import { FiPhone, MdOutlineMailOutline } from "@/assets/react-icons";

const Header = () => {
  return (
    <div className={classNames(style["header__top"])}>
      <div className={classNames(style["header__top-container"], "container")}>
        <Link href="/">
          <Image
            priority
            width={210}
            height={70}
            src={siteLogo}
            alt="RT Holdings"
            className={classNames(style["header__top-logo"])}
          />
        </Link>

        <ul className={classNames(style["header__medias"])}>
          <li className={classNames(style["header__media"])}>
            <a className={classNames(style["header__link"])} href="#">
              <span className={classNames(style["header__background"])}>
                <MdOutlineMailOutline
                  className={classNames(style["header__background-icon"])}
                />
              </span>
              <div className={classNames(style["header__content"])}>
                <p className={classNames(style["header__media-text"])}>Email</p>
                <p className={classNames(style["header__media-text"])}>
                  contact
                </p>
              </div>
            </a>
          </li>
          <li className="header__media">
            <a className={classNames(style["header__link"])} href="#">
              <span className={classNames(style["header__background"])}>
                <FiPhone
                  className={classNames(style["header__background-icon"])}
                />
              </span>
              <div className={classNames(style["header__content"])}>
                <p className={classNames(style["header__media-text"])}>
                  Call Us
                </p>
                <p className={classNames(style["header__media-text"])}>
                  (00) 112 365 489
                </p>
              </div>
            </a>
          </li>
          <li className="header__media">
            <a className={classNames(style["header__link"])} href="#">
              <span className={classNames(style["header__background"])}>
                <FiPhone
                  className={classNames(style["header__background-icon"])}
                />
              </span>
              <div className={classNames(style["header__content"])}>
                <p className={classNames(style["header__media-text"])}>
                  Call Us
                </p>
                <p className={classNames(style["header__media-text"])}>
                  (00) 112 365 489
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
