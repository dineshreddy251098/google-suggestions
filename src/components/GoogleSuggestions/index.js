import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  onSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  onSelectedSuggestion = suggestion => {
    this.setState({inputSearch: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {inputSearch} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            className="google-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                onChange={this.onSearch}
                className="input-search"
                placeholder="Search Google"
                type="search"
                value={inputSearch}
              />
            </div>
            <ul>
              {filteredList.map(each => (
                <SuggestionItem
                  key={each.id}
                  data={each}
                  onSelectedSuggestion={this.onSelectedSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
