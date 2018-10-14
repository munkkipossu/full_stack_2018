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
    foo[kentta.nimi] =  {
      nimi: kentta.nimi,
      maara: arvo
    }
    return () => {
      this.setState(foo)
    }
  }

  render() {
    return (
      <div>
        <div>
          <Otsikko teksti="Anna Palautetta" />
          <Button handleClick={this.asetaKenttaArvoon(this.state.hyva, this.state.hyva.maara + 1)} text="hyvä"/>
          <Button handleClick={this.asetaKenttaArvoon(this.state.neutraali, this.state.neutraali.maara + 1)}text="neutraali"/>
          <Button handleClick={this.asetaKenttaArvoon(this.state.huono,this.state.huono.maara + 1)} text="huono"/>
        </div>
        <div>
          <Otsikko teksti="Statistiikka" />
          <Statistics tilastot={this.state} />
        </div>
      </div>
    )
  }
}

function arvostelujaYhteensa(tilastot) {
  return tilastot.hyva.maara + tilastot.neutraali.maara + tilastot.huono.maara
}

function keskiarvo(tilastot) {
  if (arvostelujaYhteensa(tilastot) === 0){
     return 0
  }
  return ((tilastot.hyva.maara - tilastot.huono.maara)/arvostelujaYhteensa(tilastot)).toFixed(2)
}

function positiivisia(tilastot) {
  if (arvostelujaYhteensa(tilastot) === 0){
    return 0
 }
 return (tilastot.hyva.maara * 100 / arvostelujaYhteensa(tilastot)).toFixed(2)
}

 
const Otsikko = ({teksti}) => (
  <div>
    <h1>{teksti}</h1>
  </div>
)

const Statistics = ({tilastot}) => {
  if (arvostelujaYhteensa(tilastot) === 0) {
    return (
      <div>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic field={tilastot.hyva} />
          <Statistic field={tilastot.neutraali} />
          <Statistic field={tilastot.huono} />
          <Keskiarvo tilastot={tilastot} />
          <Positiivisia tilastot={tilastot} />
        </tbody>
      </table>
    </div>
  )
  }

const Keskiarvo = ({tilastot}) => (
  <tr>
    <td>keskiarvo</td>
    <td>{keskiarvo(tilastot)}</td>
  </tr>
)

const Positiivisia = ({tilastot}) => (
  <tr>
    <td>positiivisia</td>
    <td>{positiivisia(tilastot)} %</td>
  </tr>
)

const Statistic = ({field}) => (
  <tr>
    <td>{field.nimi}</td>
    <td>{field.maara}</td>    
  </tr  >
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


ReactDOM.render(
  <App  />,
  document.getElementById('root')
)