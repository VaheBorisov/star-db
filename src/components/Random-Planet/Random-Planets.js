import React from 'react';

import './Random-Planets.css';
import SwapiService from "../../services/swapi-service";

export default class RandomPlanets extends React.Component {
    swapiService = new SwapiService();
    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet})
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

// const RandomPlanets = () => {
//
//     const swapiService = new SwapiService();
//
//     const [planet, setPlanet] = useState({
//         id: 1,
//         name: null,
//         population: null,
//         rotationPeriod: null,
//         diameter: null
//     });
//
//     const updatePlanet = () => {
//         const id = Math.floor(Math.random() * 25 + 2);
//         swapiService.getPlanet(id)
//             .then(planet => {
//                 const {name, population, rotation_period, diameter} = planet;
//                 setPlanet({
//                     id,
//                     name,
//                     population,
//                     rotationPeriod: rotation_period,
//                     diameter
//                 });
//             });
//     };
//
//     const {id, name, population, rotationPeriod, diameter} = planet;
//
//     return (
//         <div className="random-planet jumbotron rounded">
//             <img className="planet-image"
//                  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
//             <div>
//                 <h4>{name}</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">
//                         <span className="term">Population</span>
//                         <span>{population}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Rotation Period</span>
//                         <span>{rotationPeriod}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Diameter</span>
//                         <span>{diameter}</span>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//
//     );
// };
//
// export default RandomPlanets