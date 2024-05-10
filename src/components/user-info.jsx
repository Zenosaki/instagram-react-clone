import instagram from '../assets/imgs/insta.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function UserInfo() {
  const [type, setType] = useState('password');
  const [password, setPassword] = useState('');
  const [showPasswordButton, setShowPasswordButton] = useState(false);
  const [buttonText, setButtonText] = useState('');

  const togglePasswordVisibility = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword !== '') {
      setShowPasswordButton(true);
      setButtonText('Afficher');
    } else {
      setShowPasswordButton(false);
      setButtonText('');
    }
  };

  return (
    <div className='user-info-container'>
      <img src={instagram} alt="Instagram" />
      <div className="form-container">
        <input
          placeholder='Num.téléphone, nom d&apos;utilisateur ou e-mail'
          type="text"
          className='user-name'
        />
        <div className="user-password">
          <input
            placeholder='Mot de passe'
            type={type}
            value={password}
            onChange={handlePasswordChange}
          />
          {showPasswordButton && (
            <button onClick={togglePasswordVisibility}>
              {buttonText}
            </button>
          )}
        </div>
        <button className='Connexion-button'>Se connecter</button>
      </div>
      <div className="seperator">
        <div></div>
        <p>ou</p>
        <div></div>
      </div>
      <div className="Link-Facebook">
        <FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'hsl(221, 44%, 30%)', fontSize: '20px' }} />
        <a href="#">Se connecter avec Facebook</a>
      </div>
      <a href='#'>Mot de passe oublié ?</a>
    </div>
  );
}
