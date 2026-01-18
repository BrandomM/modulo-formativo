import styles from "./AnswerOption.module.css";

export function AnswerOption({ id, text, isActive, onSelect }) {
  return (
    <div onClick={() => onSelect(id)}>
      <p className={ `${styles.tag} ${isActive ? "e-tag" : styles.inactiveTag}`}>• {text}</p>
    </div>
  );
}
