import styles from "./ImageBar.module.css";

export function ImageBar({ imgUrl, subTitle, text, reverse }) {
  return (
    <div className={styles.sectionContainer}>
      <section className="m-imagebar">
        <section className={`g-container ${reverse ? "-reverse" : ""}`}>
          <div className="g-cell -x5">
            <img alt="" className="e-image -ratio-1-1" src={imgUrl} />
          </div>
          <div className="g-cell -x7">
            <h3 className="t-subtitle-lead">{subTitle}</h3>

            <div className="t-text-superlead">
              <p>{text}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
