import styles from "./Learning.module.css";
import { NavLink, useParams } from "react-router";

export function Learning() {
  const params = useParams();

  return (
    <div className="theme-base page-sustainability-planet-">
      <section className="m-hero ">
        <section className="g-container">
          <div className="g-cell -x6">
            <h1 className="t-title-1">
              Garantizando experiencias que superan expectativas
            </h1>

            <p className="t-subtitle">
              El proceso de Control de Calidad del Servicio se enfoca en
              monitorear, evaluar y optimizar cada interacción que usuarios y
              conductores tienen con la plataforma. A través del análisis
              constante de métricas clave y la implementación de acciones
              correctivas y preventivas, aseguramos que nuestros estándares
              operativos se mantengan y evolucionen para ofrecer un servicio
              confiable, eficiente y centrado en las personas.
            </p>
          </div>

          <div className="g-cell -x6">
            <img
              alt=""
              className="e-image -ratio-4-3"
              src="https://cabify.website/static/pages/sustainability/planet/hero.svg"
            />
          </div>
        </section>
      </section>

      <section className="m-medialogos   -subdued ">
        <section className="g-container ">
          <div className="g-cell -x5">
            <p className="e-tag">¡Importante!</p>

            <h3 className="t-title-3">
              ¿Cómo sabemos si cada viaje ofrece la calidad que prometemos?
            </h3>

            <div className="t-text-superlead"></div>
          </div>
          <div className="g-cell -x6 -offset-x1">
            <ul className="g-container g-cell -x6">
              <li className="g-cell -x2">
                <img
                  alt=""
                  className="e-image -ratio-1-1"
                  src="https://assets.cabifil.es/images/illustrations_square/il_square_hand_holding_heart.svg"
                />
              </li>

              <li className="g-cell -x2">
                <img
                  alt=""
                  className="e-image -ratio-1-1"
                  src="https://assets.cabifil.es/images/illustrations_square/il_square_woman_hand_chest.svg"
                />
              </li>

              <li className="g-cell -x2">
                <img
                  alt=""
                  className="e-image -ratio-1-1"
                  src="https://cabify.com/static/pages/drivers/ethical-principles/respect.svg"
                />
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="m-textfeatured  ">
        <section className="g-container">
          <div className="g-cell -x12">
            <p className="e-tag">Paso a paso</p>
          </div>

          <div className="g-container g-cell -x12">
            <div className="g-cell -x6">
              <h3 className="t-title-3">
                1. Recopilación inteligente de datos
              </h3>
            </div>
            <div className="g-cell -x6">
              <p className="t-subtitle">
                En esta etapa reunimos toda la información relevante generada
                durante la operación diaria. Esto incluye métricas automáticas
                del sistema, como tiempos de espera, duración de viajes, tasas
                de aceptación y cancelación, así como señales cualitativas
                provenientes de valoraciones, comentarios de usuarios y reportes
                de incidencias generados por agentes o conductores. Los datos se
                integran en paneles centralizados, lo que permite obtener una
                visión unificada y evitar duplicidades o inconsistencias. Esta
                recopilación constante asegura una base sólida sobre la cual
                realizar un análisis preciso del desempeño.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="m-horizontaltextboxes  ">
        <section className="g-container">
          <ul className="g-container">
            <li className="g-cell -x6  ">
              <div className="image">
                <img
                  alt=""
                  className=" - "
                  src="https://assets.cabifil.es/images/illustrations_square/il_square_earth_heart.svg"
                />
              </div>

              <div className="content">
                <h2 className="t-text-superlead">
                  2. Análisis profundo de indicadores clave
                </h2>

                <div className="t-text-lead">
                  <p>
                    Una vez reunidos los datos, se lleva a cabo un estudio
                    detallado de cada indicador clave de la operación. Evaluamos
                    tendencias, picos atípicos y variaciones en los
                    comportamientos tanto de usuarios como de conductores. Esto
                    puede implicar analizar por separado segmentos como zonas
                    geográficas, franjas horarias o tipos de servicio para
                    detectar comportamientos específicos. Además, aplicamos
                    comparaciones con períodos anteriores y valores estándar
                    para identificar si el rendimiento se encuentra dentro de
                    parámetros óptimos. El objetivo es comprender no solo qué
                    está ocurriendo, sino también por qué.
                  </p>
                </div>

                <a
                  className="e-cta -tertiary"
                  href="https://cabify.com/co/sostenibilidad/electrificacion"
                >
                  Saber más
                  <i className="e-icon -arrow_right_md"></i>
                </a>
              </div>
            </li>

            <li className="g-cell -x6  ">
              <div className="image">
                <img
                  alt=""
                  className=" - "
                  src="https://cabify.com/static/pages/sustainability/planet/usecases-air.svg"
                />
              </div>

              <div className="content">
                <h2 className="t-text-superlead">
                  3. Identificación de desvíos y oportunidades
                </h2>

                <div className="t-text-lead">
                  <p>
                    Aquí detectamos cualquier discrepancia entre los resultados
                    actuales y los estándares de calidad esperados. Esto incluye
                    identificar fallas recurrentes, como demoras habituales en
                    ciertas zonas, incrementos en cancelaciones por parte de
                    conductores o insatisfacción del usuario en situaciones
                    específicas. A su vez, este paso destaca áreas de
                    oportunidad para mejorar la eficiencia o la experiencia del
                    usuario. El análisis se enfoca tanto en problemas operativos
                    inmediatos como en patrones que podrían impactar la calidad
                    a mediano plazo, permitiendo priorizar acciones según su
                    impacto.
                  </p>
                </div>

                <a
                  className="e-cta -tertiary"
                  href="https://cabify.com/co/neutros-en-carbono"
                >
                  Revisemos algunos ejemplos
                  <i className="e-icon -arrow_right_md"></i>
                </a>
              </div>
            </li>

            <li className="g-cell -x6  ">
              <div className="image">
                <img
                  alt=""
                  className=" - "
                  src="https://assets.cabifil.es/images/illustrations_square/il_square_location_route.svg"
                />
              </div>

              <div className="content">
                <h2 className="t-text-superlead">
                  4. Implementación de acciones correctivas y preventivas
                </h2>

                <div className="t-text-lead">
                  <p>
                    Con los desvíos detectados, se diseñan y ejecutan acciones
                    destinadas a solucionar los problemas y evitar que se
                    repitan. Las acciones pueden incluir ajustes en protocolos,
                    bloqueos o alertas para conductores que no cumplen con
                    estándares, mejoras en la comunicación con usuarios,
                    optimización de herramientas internas, campañas de
                    capacitación o redistribución estratégica de la oferta de
                    vehículos. También se desarrollan medidas preventivas
                    basadas en predicciones o tendencias, lo que permite
                    anticiparse a escenarios que puedan comprometer la
                    operación.
                  </p>
                </div>
              </div>
            </li>

            <li className="g-cell -x6  ">
              <div className="image">
                <img
                  alt=""
                  className=" - "
                  src="https://cabify.com/static/pages/sustainability/planet/usecases-road.svg"
                />
              </div>

              <div className="content">
                <h2 className="t-text-superlead">
                  5. Seguimiento y retroalimentación continua
                </h2>

                <div className="t-text-lead">
                  <p>
                    Tras aplicar las acciones correspondientes, se monitorea su
                    efecto para validar si realmente resolvieron la causa raíz
                    del problema. Este seguimiento incluye el análisis de
                    indicadores posteriores, la comparación con estados previos
                    y la recolección de retroalimentación de usuarios,
                    conductores y agentes. Si los resultados no alcanzan los
                    estándares esperados, se ajustan o rediseñan las medidas.
                    Este ciclo continuo de evaluación garantiza que la calidad
                    del servicio mejore de forma sostenida y se adapte a cambios
                    en la operación, el mercado o el comportamiento de los
                    usuarios.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>

      <section className={`m-jumbo -brand ${styles.mJumbo}`}>
        <section className={`g-container ${styles.gContainer}`}>
          <div className="g-cell -x8">
            <h3 className="t-title-3">
              ¿Quieres poner a prueba lo que has aprendido?
            </h3>
          </div>

          <div className="g-cell -x8">
            <NavLink
              className="e-cta -primary"
              rel="noopener"
              to={"/procesos/" + params.procesoId + "/test"}
            >
              Tomar evaluación interactiva
            </NavLink>
          </div>
        </section>
      </section>
    </div>
  );
}
