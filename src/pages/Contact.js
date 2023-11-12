import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Contact = () => {
    return (
        <div className='contact'>
        <Navigation/>
        <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox">
                <h1>contactez-moi</h1>
                <ul>
                    <li>
                    <i class="bi bi-geo-alt-fill"></i>
                        <span>Paris</span>
                    </li>
                    <li>
                    <i class="bi bi-telephone-fill"></i>
                        <CopyToClipboard text='0765217276'>
                            <span className='clikInput' onClick={()=> { alert('Numéro de téléphone copié!');} }> 0765217276</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                    <i class="bi bi-envelope-fill"></i>
                        <CopyToClipboard text='soumarenaye@hotmail.fr'>
                            <span className='clikInput' onClick={()=> { alert('Email copié!');} }> soumarenaye@hotmail.fr</span>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <a href="https://www.linkedin.com">
                        <h4>LinkedIn</h4>
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.linkedin.com">
                        <h4>LinkedIn</h4>
                        <i class="bi bi-linkedin"></i>
                    </a>
                    
                </ul>
            </div>
        </div>
            
        </div>
    );
};

export default Contact;