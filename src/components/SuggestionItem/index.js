// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {updateSearchInput, suggestionDetails} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <button onClick={onClickSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
