import styles from './FilterSelect.module.css'

function FilterSelect({handleSelected}) {

  function select(e) {
    e.preventDefault()

    handleSelected(e.target.value)
  }

  return (
    <div className={styles.container}>
      <label htmlFor='filter'>Filtrar:</label>
      <select name='filter' id='filter' onChange={select}>
        <option value='all'>Todos</option>
        <option value='to-do'>A fazer</option>
        <option value='done'>Concluídas</option>
      </select>
    </div>
  )
}

export default FilterSelect