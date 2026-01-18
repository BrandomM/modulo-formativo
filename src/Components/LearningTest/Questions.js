export const questions = [
  {
    questionId: 1,
    statement:
      "¿Cuál es el objetivo principal del seguimiento después de implementar acciones correctivas?",
    answerOptions: [
      { answerId: 1, text: "Documentar el problema para futuros reportes." },
      {
        answerId: 2,
        text: "Validar si las acciones aplicadas resolvieron la causa raíz.",
      },
      { answerId: 3, text: "Cumplir con un requisito administrativo." },
      { answerId: 4, text: "Identificar nuevos problemas no relacionados." },
    ],
    correctAnswerId: 2,
    feedback:
      "El propósito del seguimiento es comprobar si las medidas implementadas realmente resolvieron la causa raíz del problema. Sin este proceso, no se puede confirmar la efectividad de las acciones ni garantizar la mejora continua.",
  },
  {
    questionId: 2,
    statement: "¿Qué elementos se analizan durante el seguimiento del proceso?",
    answerOptions: [
      {
        answerId: 1,
        text: "Únicamente los errores cometidos por los agentes.",
      },
      {
        answerId: 2,
        text: "Solo los tiempos operativos antes de las acciones correctivas.",
      },
      {
        answerId: 3,
        text: "Indicadores posteriores, comparaciones con estados previos y retroalimentación de usuarios y operadores.",
      },
      {
        answerId: 4,
        text: "La opinión del supervisor sobre el cambio implementado.",
      },
    ],
    correctAnswerId: 3,
    feedback:
      "El seguimiento implica revisar métricas después de la intervención, compararlas con los resultados previos y recopilar retroalimentación de los actores involucrados. Esto permite evaluar el impacto real de las medidas tomadas.",
  },
  {
    questionId: 3,
    statement:
      "¿Qué debe hacerse si los resultados obtenidos no cumplen con los estándares esperados?",
    answerOptions: [
      { answerId: 1, text: "Cerrar el caso sin cambios adicionales." },
      { answerId: 2, text: "Repetir el mismo proceso sin modificaciones." },
      { answerId: 3, text: "Ajustar o rediseñar las acciones implementadas." },
      {
        answerId: 4,
        text: "Esperar más tiempo para ver si los resultados mejoran solos.",
      },
    ],
    correctAnswerId: 3,
    feedback:
      "Cuando los resultados no alcanzan el nivel requerido, es necesario modificar o rediseñar las acciones correctivas. Este ajuste asegura que la solución se adapte realmente a la necesidad operacional.",
  },
  {
    questionId: 4,
    statement: "¿Por qué se considera que el seguimiento es un ciclo continuo?",
    answerOptions: [
      {
        answerId: 1,
        text: "Porque se repite automáticamente sin intervención humana.",
      },
      {
        answerId: 2,
        text: "Porque una vez completado, se archiva y no se revisa nuevamente.",
      },
      {
        answerId: 3,
        text: "Porque requiere evaluación constante para mejorar y adaptarse a cambios.",
      },
      {
        answerId: 4,
        text: "Porque solo es necesario cuando ocurre un problema grave.",
      },
    ],
    correctAnswerId: 3,
    feedback:
      "El seguimiento es continuo ya que la operación, el mercado y el comportamiento de los usuarios cambian con el tiempo. Evaluar regularmente permite mantener la calidad del servicio y ajustarse de manera oportuna.",
  },
  {
    questionId: 5,
    statement:
      "¿Qué beneficio clave ofrece la retroalimentación de usuarios, conductores y agentes?",
    answerOptions: [
      {
        answerId: 1,
        text: "Permite evaluar la satisfacción sin necesidad de revisar indicadores.",
      },
      {
        answerId: 2,
        text: "Proporciona información directa del impacto real de las acciones implementadas.",
      },
      { answerId: 3, text: "Sustituye la necesidad de análisis comparativos." },
      { answerId: 4, text: "Es útil solo para documentar quejas." },
    ],
    correctAnswerId: 2,
    feedback:
      "La retroalimentación de quienes viven la operación en primera línea ayuda a comprender cómo las medidas aplicadas afectan la experiencia real, permitiendo validar y enriquecer el análisis de indicadores.",
  },
];
