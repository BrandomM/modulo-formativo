import styles from "./Procesos.module.css";
import { ProcesoCard } from "../ProcesoCard/ProcesoCard";
import { procesosInfo } from "./ProcesosInfo.js";

export function Procesos() {
  return (
    <div className={styles.procesos}>
      <section className="m-horizontaltextboxes  ">
        <section className="g-container">
          <div className="g-cell head -x12">
            <div className="g-container">
              <h2 className="g-cell t-title-3 -x6">
                Tu guía esencial para operar con excelencia
              </h2>

              <p className="g-cell t-subtitle -x6">
                Bienvenido a la sección donde conocerás los procesos que hacen
                posible nuestro día a día. Aquí aprenderás de manera sencilla y
                práctica cómo ejecutar cada paso clave de tus funciones.
              </p>
            </div>
          </div>

          <ul className="g-container">
            <ProcesoCard
              imgUrl={procesosInfo.proceso1.imgUrl}
              subTitle={procesosInfo.proceso1.subTitle}
              text={procesosInfo.proceso1.text}
              procesoId={procesosInfo.proceso1.procesoId}
            ></ProcesoCard>
            <ProcesoCard
              imgUrl={procesosInfo.proceso2.imgUrl}
              subTitle={procesosInfo.proceso2.subTitle}
              text={procesosInfo.proceso2.text}
              procesoId={procesosInfo.proceso2.procesoId}
            ></ProcesoCard>
            <ProcesoCard
              imgUrl={procesosInfo.proceso3.imgUrl}
              subTitle={procesosInfo.proceso3.subTitle}
              text={procesosInfo.proceso3.text}
              procesoId={procesosInfo.proceso3.procesoId}
            ></ProcesoCard>
            <ProcesoCard
              imgUrl={procesosInfo.proceso4.imgUrl}
              subTitle={procesosInfo.proceso4.subTitle}
              text={procesosInfo.proceso4.text}
              procesoId={procesosInfo.proceso4.procesoId}
            ></ProcesoCard>
            <ProcesoCard
              imgUrl={procesosInfo.proceso5.imgUrl}
              subTitle={procesosInfo.proceso5.subTitle}
              text={procesosInfo.proceso5.text}
              procesoId={procesosInfo.proceso5.procesoId}
            ></ProcesoCard>
            <ProcesoCard
              imgUrl={procesosInfo.proceso6.imgUrl}
              subTitle={procesosInfo.proceso6.subTitle}
              text={procesosInfo.proceso6.text}
              procesoId={procesosInfo.proceso6.procesoId}
            ></ProcesoCard>
          </ul>
        </section>
      </section>
    </div>
  );
}
