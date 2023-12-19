export const LanguageForm = () => {
  return (
    <form>
        <h3>Language</h3>
        <label>Language</label>
        <input type="text" name=""/>
        <label>Fluency</label>
        <select name="">
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
        </select>
        <input type="submit" value="Add" className="btn-submit"/>
    </form>
  )
}
