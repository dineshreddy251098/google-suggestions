import './index.css'

const SuggestionItem = props => {
  const {data, onSelectedSuggestion} = props
  const {suggestion} = data
  const onSelectSuggestion = () => {
    onSelectedSuggestion(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={onSelectSuggestion}
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}
export default SuggestionItem
