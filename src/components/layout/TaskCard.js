import {BsCheckLg, BsPencilFill, BsXLg} from 'react-icons/bs'
import styles from './TaskCard.module.css'

import Button from './Button'

function TaskCard({id, name, status, actions}) {
  function handleCheck(e) {
    e.preventDefault()
    actions.check(id, status)
  }

  function handleEdit(e) {
    e.preventDefault()
    actions.edit(id, name)
  }

  function handleRemove(e) {
    e.preventDefault()
    actions.remove(id)
  }

  return (
    <div className={`${styles.container} ${styles[status.id === '1' ? 'done' : 'to_do']}`}>
      <p>{name}</p>
      <div className={styles.btnContainer}>
        <Button handleAction={handleCheck} text={<BsCheckLg />} />
        <Button handleAction={handleEdit} text={<BsPencilFill />} />
        <Button handleAction={handleRemove} text={<BsXLg />} />
      </div>
    </div>
  )
}

export default TaskCard