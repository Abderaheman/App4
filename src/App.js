import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Définir l'état initial
    this.state = {
      personne: {
        fullName: 'John Doe',
        bio: 'Un développeur passionné.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Ingénieur logiciel'
      },
      show: false,
      timeElapsed: 0
    };
  }

  // Méthode de cycle de vie appelée après le montage du composant
  componentDidMount() {
    // Définir un intervalle pour mettre à jour le temps écoulé chaque seconde
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
    }, 1000);
  }

  // Méthode de cycle de vie appelée juste avant le démontage du composant
  componentWillUnmount() {
    // Nettoyer l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.interval);
  }

  // Méthode pour basculer l'état d'affichage du profil
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {
    const { personne, show, timeElapsed } = this.state;
    return (
      <div className="App">
        {/* Bouton pour basculer l'affichage du profil */}
        <button onClick={this.toggleShow}>
          {show ? 'Hide' : 'Show'} Profil
        </button>
        {/* Afficher le profil si show est vrai */}
        {show && (
          <div>
            <h1>{personne.fullName}</h1>
            <p>{personne.bio}</p>
            <img src={personne.imgSrc} alt="Profile" />
            <h2>{personne.profession}</h2>
          </div>
        )}
        {/* Afficher le temps écoulé depuis le montage du composant */}
        <p>Temps écoulé depuis le composant monté : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
