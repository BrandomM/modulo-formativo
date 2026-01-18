import styles from "./LearningTest.module.css";
import { AnswerOption } from "../AnswerOption/AnswerOption";
import { useState } from "react";
import { questions } from "./Questions";
import { NavLink } from "react-router";

export function LearningTest() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [isSelectionBlocked, setIsSelectionBlocked] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const handleSelect = (id) => {
    if (!isSelectionBlocked) {
      setSelectedId(id);
    }
  };

  const currentQuestion = questions[currentQuestionId];

  const nextQuestion = () => {
    if (selectedId === 0) return;

    setCurrentQuestionId(currentQuestionId + 1);
    setIsFeedbackVisible(false);
    setIsSelectionBlocked(false);
    setSelectedId(0);
    if (selectedId === currentQuestion.correctAnswerId) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const showResults = () => {
    if (selectedId === 0) return;
    setIsFeedbackVisible(false);
    setIsSelectionBlocked(false);
    setSelectedId(0);
    if (selectedId === currentQuestion.correctAnswerId) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setIsResultsVisible(true);
  };

  const showFeedback = () => {
    if (selectedId === 0) return;
    setIsFeedbackVisible(true);
    setIsSelectionBlocked(true);
  };

  // Pantalla de resultados
  if (isResultsVisible) {
    return (
      <section className="m-horizontaltextboxes  ">
        <section className="g-container">
          <div className={styles.questionContainer}>
            <div>
              <h2 className={`t-title-2 ${styles.resultsTitle}`}>
                Resultados globales
              </h2>
              <div className="g-container g-cell -x12">
                <div className={`g-cell -x6 t-subtitle ${styles.resultsInfo}`}>
                  <p>Total preguntas: {questions.length}</p>
                  <p>Respuestas correctas: {correctAnswers}</p>
                  <p>Tiempo total: 2 minutos</p>
                </div>
                <div className="g-cell -x6 t-subtitle">
                  <div className={styles.scoreContainer}>
                    <h1 className={`t-title-1 ${styles.score}`}>
                      {(correctAnswers / questions.length) * 100}%
                    </h1>
                  </div>
                </div>
              </div>
              <h2 className={`t-title-2 ${styles.resultsSecondaryTitle}`}>
                Rendimiento por sección
              </h2>
              <section className="m-horizontaltextboxes  ">
                <section className="g-container">
                  <ul className="g-container">
                    <li className={`g-cell -x4 ${styles.gCell}`}>
                      <div className="image">
                        <img
                          alt=""
                          className=" - "
                          src="https://cabify.com/static/pages/riders/illustrations/taxi-yellow.svg"
                        />
                      </div>

                      <div
                        className={`content ${styles.secondaryScoreContainer}`}
                      >
                        <h2 className="t-text-superlead">
                          Análisis Post-Acción
                        </h2>

                        <h2 className={`t-title-2 ${styles.secondaryScore}`}>
                          20%
                        </h2>
                        <div className="t-text-lead">
                          <p>
                            Tu comprensión sobre cómo validar si una acción
                            resolvió la causa raíz aún es limitada. Se
                            recomienda revisar el módulo de Análisis Post-Acción
                            para fortalecer los conceptos relacionados con la
                            evaluación de impacto.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={`g-cell -x4 ${styles.gCell}`}>
                      <div className="image">
                        <img
                          alt=""
                          className=" - "
                          src="https://cabify.com/static/pages/riders/illustrations/cabify.svg"
                        />
                      </div>

                      <div
                        className={`content ${styles.secondaryScoreContainer}`}
                      >
                        <h2 className="t-text-superlead">
                          Monitoreo de Indicadores
                        </h2>

                        <h2 className={`t-title-2 ${styles.secondaryScore}`}>
                          50%
                        </h2>
                        <div className="t-text-lead">
                          <p>
                            Tienes una comprensión parcial del monitoreo, aunque
                            aún presentas dificultades para relacionar los
                            indicadores con el desempeño real. Repasa los
                            ejemplos prácticos del módulo para mejorar el
                            análisis.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={`g-cell -x4 ${styles.gCell}`}>
                      <div className="image">
                        <img
                          alt=""
                          className=" - "
                          src="https://assets.cabifil.es/images/illustrations_square/il_square_box_clock.svg"
                        />
                      </div>

                      <div
                        className={`content ${styles.secondaryScoreContainer}`}
                      >
                        <h2 className="t-text-superlead">Ajuste Continuo</h2>

                        <h2 className={`t-title-2 ${styles.secondaryScore}`}>
                          100%
                        </h2>
                        <div className="t-text-lead">
                          <p>
                            Tienes alta comprensión del ciclo de
                            retroalimentación y cómo los ajustes continuos
                            permiten optimizar la operación. Excelente
                            interpretación del rol de usuarios y actores del
                            proceso.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p className={styles.generalFeecback}>
                    En general, vas por un camino adecuado: cuentas con
                    los fundamentos y los aplicas parcialmente de manera
                    correcta. Para avanzar hacia un nivel avanzado, te
                    recomendamos profundizar en los criterios de evaluación de
                    acciones, practicar con escenarios reales y seguir
                    reforzando la lectura crítica de indicadores. Con estos
                    pasos, podrás desempeñarte con mayor seguridad y aportar
                    mejoras más estratégicas a la operación.
                  </p>
                </section>
              </section>
              <div className={styles.btnResultsContainer}>
                <NavLink className="e-cta -primary" to="/procesos">
                  Regresar
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }

  // Evaluación
  return (
    <section className="m-horizontaltextboxes  ">
      <section className="g-container">
        <div className={styles.questionContainer}>
          <p className={`t-subtitle ${styles.questionNumber}`}>
            Pregunta {currentQuestionId + 1} de {questions.length}
          </p>
          {/* ENUNCIADO */}
          <h3 className="t-subtitle-lead">{currentQuestion.statement}</h3>
          {/* PREGUNTAS */}
          {currentQuestion.answerOptions.map((item) => (
            <AnswerOption
              key={item.answerId}
              id={item.answerId}
              isActive={item.answerId === selectedId}
              text={item.text}
              onSelect={handleSelect}
            />
          ))}
          {/* FEEDBACK */}
          <div className={styles.feedback} hidden={!isFeedbackVisible}>
            <p className="t-text-superlead">
              {selectedId === currentQuestion.correctAnswerId
                ? "¡Correcto!"
                : "Incorrecto..."}
            </p>
            {currentQuestion.feedback}
          </div>
          {/* BOTONES */}
          <div className={styles.btnContainer}>
            {currentQuestionId + 1 === questions.length ? (
              <button className="e-cta -primary" onClick={() => showResults()}>
                Ver resultados{" "}
                <i className={`e-icon -arrow_right_md ${styles.btnIcon}`}></i>
              </button>
            ) : (
              <button className="e-cta -primary" onClick={() => nextQuestion()}>
                Siguiente{" "}
                <i className={`e-icon -arrow_right_md ${styles.btnIcon}`}></i>
              </button>
            )}

            <button
              className={`e-cta -tertiary ${styles.confirmAnswer}`}
              onClick={() => showFeedback()}
            >
              Compruebe su respuesta
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
