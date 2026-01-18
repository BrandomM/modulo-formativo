import styles from "./ProcesoCard.module.css";
import { NavLink } from "react-router";

export function ProcesoCard({ imgUrl, subTitle, text, procesoId }) {
  return (
    <li className={`g-cell -x4 -bordered ${styles.cardContainer}`}>
      <div>
        <div className="image">
          <img alt="" className=" - " src={imgUrl} />
        </div>

        <div className="content">
          <h2 className="t-text-superlead">{subTitle}</h2>

          <div className="t-text-lead">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div>
        <NavLink
          className="e-cta -primary"
          to={"/procesos/" + procesoId + "/learning"}
        >
          Conocer más
        </NavLink>
      </div>
    </li>
  );
}
