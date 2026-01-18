import styles from "./Home.module.css";
import { ImageBar } from "../ImageBar/ImageBar";
import { MediaImage } from "../MediaImage/MediaImage";
import { homeInfo } from "./HomeInfo";

export function Home() {
  return (
    <div>
      {/* Bienvenida */}
      <ImageBar
        imgUrl={homeInfo.bienvenida.imgUrl}
        subTitle={homeInfo.bienvenida.subtitle}
        text={homeInfo.bienvenida.text}
      ></ImageBar>
      {/* Introducción */}
      <ImageBar
        imgUrl={homeInfo.introduccion.imgUrl}
        subTitle={homeInfo.introduccion.subtitle}
        text={homeInfo.introduccion.text}
        reverse
      ></ImageBar>
      <div className={styles.modulesContainer}>
        {/* Módulo de estructura */}
        <MediaImage
          imgUrl={homeInfo.estructura.imgUrl}
          tag={homeInfo.estructura.tag}
          subTitle={homeInfo.estructura.subTitle}
          text={homeInfo.estructura.text}
          linkText={homeInfo.estructura.linkText}
          linkTo={homeInfo.estructura.linkTo}
        ></MediaImage>
        {/* Módulo de áreas clave */}
        <MediaImage
          imgUrl={homeInfo.areas.imgUrl}
          tag={homeInfo.areas.tag}
          subTitle={homeInfo.areas.subTitle}
          text={homeInfo.areas.text}
          linkText={homeInfo.areas.linkText}
          linkTo={homeInfo.areas.linkTo}
          reverse
        ></MediaImage>
        {/* Módulo de Procesos operativos */}
        <MediaImage
          imgUrl={homeInfo.procesos.imgUrl}
          tag={homeInfo.procesos.tag}
          subTitle={homeInfo.procesos.subTitle}
          text={homeInfo.procesos.text}
          linkText={homeInfo.procesos.linkText}
          linkTo={homeInfo.procesos.linkTo}
        ></MediaImage>
        {/* Módulo de recursos */}
        <MediaImage
          imgUrl={homeInfo.recursos.imgUrl}
          tag={homeInfo.recursos.tag}
          subTitle={homeInfo.recursos.subTitle}
          text={homeInfo.recursos.text}
          linkText={homeInfo.recursos.linkText}
          linkTo={homeInfo.recursos.linkTo}
          reverse
        ></MediaImage>
      </div>
    </div>
  );
}
