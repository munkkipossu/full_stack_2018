import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: Array(anecdotes.length).fill(0)
    }
  }

  randomAnecdote = () => () => this.setState({selected: Math.round(Math.random() * (anecdotes.length - 1))})

  vote = () => () => {
    let foo = this.state.votes.slice()
    foo[this.state.selected] += 1
    this.setState({votes: foo})
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <Button handleClick={this.vote()} text="vote" />  
        <Button handleClick={this.randomAnecdote()} text="next anecdote"/>  
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
