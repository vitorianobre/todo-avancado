  import styles from './TaskForm.module.css'

  import Input from "../layout/Input";
  import Button from "../layout/Button";

  function SearchForm({handleSearch, text, placeholder, btnIcon}) {

    function handleChange(e) {
      handleSearch(e.target.value)
    }

    function submit(e) {
      e.preventDefault()
    }

    return (
      <form onSubmit={submit} className={styles.form_container}>
        <Input
          type="text"
          text={text}
          name="name"
          placeholder={placeholder}
          handleOnChange={handleChange}
        />
        <Button text={btnIcon} />
      </form>
    )
  }

  export default SearchForm