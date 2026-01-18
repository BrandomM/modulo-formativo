import styles from "./MediaImage.module.css";
import { NavLink } from "react-router";

export function MediaImage({
  imgUrl,
  tag,
  subTitle,
  text,
  reverse,
  linkText,
  linkTo,
}) {
  return (
    <div className={styles.sectionContainer}>
      <section className="m-mediaimage">
        <section className={`g-container ${reverse ? "-reverse" : ""} --rows`}>
          <div className="g-cell -x6 media-img">
            <img alt="" className="e-image -ratio-4-3" src={imgUrl} />
          </div>
          <div className="g-cell -x6 media-content">
            <p className="e-tag">{tag}</p>

            <h3 className="t-title-3">{subTitle}</h3>

            <div className="t-text-superlead">
              <p>{text}</p>
            </div>

            <div>
              <NavLink className="e-cta -tertiary" to={"/" + linkTo}>
                {linkText}
                <i className="e-icon -arrow_right_md"></i>
              </NavLink>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
