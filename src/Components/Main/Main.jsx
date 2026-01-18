import styles from "./Main.module.css";
import { Routes, Route } from "react-router";
import { Home } from "../Home/Home";
import { Procesos } from "../Procesos/Procesos";
import { Learning } from "../Learning/Learning";
import { LearningTest } from "../LearningTest/LearningTest";
import { Estructura } from "../Estructura/Estructura";

export function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="estructura-oganizacional" element={<Estructura />} />
        <Route path="areas-clave" element={<div />} />
        <Route path="recursos" element={<div />} />
        <Route path="procesos">
          <Route index element={<Procesos />} />
          <Route path=":procesoId">
            <Route path="learning" element={<Learning />} />
            <Route path="test" element={<LearningTest />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
