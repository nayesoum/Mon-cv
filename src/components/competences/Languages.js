import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    //ceci est une class component on peu ajouter des fonction et des states
    state = {
        languages: [
            {id: 1, value: "HTML/Css", xp:1.9},
            {id: 2, value: "JavaScript", xp:1.5},
            {id: 3, value: "Php", xp:1.3},
            {id: 4, value: "Python", xp:0.6},
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp:0.9},
            {id: 2, value: "React", xp:0.6},
            {id: 3, value: "Bootstrap", xp:1.6},
            {id: 4, value: "Sass", xp:0.3},
            
        ]
    }
    
    render() {
        // ici je crée une variable je lui dis que quand je mettrais languages ou framworks ca voudra dire que c'est this au lieu de repetrer this.state.languages ou framworks
        let{ languages, frameworks} = this.state
        
        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                // ceci sont des props je lui dit ici je te passe le langage la classname et le titre
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;