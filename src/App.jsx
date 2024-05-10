import './styles/index.scss';
import UserInfo from './components/user-info.jsx';
import LoginSuggest from './components/login-suggest.jsx';
import InstallApp from './components/install-app.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <div className="container">
        <main>
          <UserInfo />
          <LoginSuggest />
          <InstallApp />
        </main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
