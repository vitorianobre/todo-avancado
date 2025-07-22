import styles from './Button.module.css'

function Button({text, handleAction, desable}) {
  return (
    <button onClick={handleAction} className={styles.btn}>{text}</button>
  )
}

export default Button