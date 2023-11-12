import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
           <h3>Mes centres d'interet</h3>
            <ul>
                <li className='hobby'>
                <i class="bi bi-person-lines-fill"></i>
                <span>danse</span>
                </li>
                <li className='hobby'>
                <i class="bi bi-person-lines-fill"></i>
                <span>boxe tai</span>
                </li>
                <li className='hobby'>
                <i class="bi bi-person-lines-fill"></i>
                <span>zumba</span>
                </li>
                <li className='hobby'>
                <i class="bi bi-person-lines-fill"></i>
                <span>natation</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;