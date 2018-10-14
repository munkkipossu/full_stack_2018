import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: {
        nimi: "hyva",
        maara: 0,
      },
      neutraali: {
        nimi: "neutraali",
        maara: 0,
      },
      huono: {
        nimi: "huono",
        maara: 0
      }
    }
  }

  asetaKenttaArvoon = (kentta, arvo) => {
    let foo = {}
    console.log(arvo)
    foo[kentta.nimi] =  {
      nimi: kentta.nimi,
      maara: arvo
    }
    console.log(foo)
    return () => {
      this.setState(foo)
    }
  }

  render() {
    return (
      <div>
        <div>
          <Otsikko teksti="Anna Palautetta" />
        </div>
        <div>
          <Button handleClick={this.asetaKenttaArvoon(this.state.hyva, this.state.hyva.maara + 1)} text="hyvä"/>
          <Button handleClick={this.asetaKenttaArvoon(this.state.neutraali, this.state.neutraali.maara + 1)}text="neutraali"/>
          <Button handleClick={this.asetaKenttaArvoon(this.state.huono,this.state.huono.maara + 1)} text="huono"/>
        </div>
        <div>
          <Otsikko teksti="Statistiikka" />
        </div>
        <div>
          <Statistiikka arvo={this.state.hyva} />
          <Statistiikka arvo={this.state.neutraali} />
          <Statistiikka arvo={this.state.huono} />
        </div>
      </div>
    )
  }
}

const Otsikko = ({teksti}) => (
  <div>
    <h1>{teksti}</h1>
  </div>
)

const Statistiikka = ({arvo}) => {
  return (
  <div>
    <p>{arvo.nimi}: {arvo.maara}</p>    
  </div>
)
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


ReactDOM.render(
  <App  />,
  document.getElementById('root')
)