import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                    <i class="bi bi-github"></i>
                    Github /gitlab
                    </li>
                    <li>
                    <i class="bi bi-patch-check-fill"></i>
                    jenkins
                    </li>
                    <li>
                    <i class="bi bi-filetype-json"></i>
                    json
                    </li>
                    <li>
                    <i class="bi bi-patch-check-fill"></i>
                    api
                    </li>
                </ul>

                <ul>
                    <li>
                    <i class="bi bi-filetype-sql"></i>
                    sql server
                    </li>
                    <li>
                    <i class="bi bi-patch-check-fill"></i>
                    mysql
                    </li>
                    <li>
                    <i class="bi bi-patch-check-fill"></i>
                    figma
                    </li>
                    <li>
                    <i class="bi bi-patch-check-fill"></i>
                    phpstorm
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default OtherSkills;