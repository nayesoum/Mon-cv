import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/competences/Languages';
import Hobbies from '../components/competences/Hobbies';
import OtherSkills from '../components/competences/OtherSkills';
import Experience from '../components/competences/Experience';

const Competence = () => {
    return (
        <div className='competence'>
            <Navigation/>
            <div className='competenceContent'>
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Competence;