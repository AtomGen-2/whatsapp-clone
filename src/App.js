import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
// third party imports

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDgSXaGdSDX317KIKAy9IaPO_Zt2pyStbo",
    authDomain: "whatsapp-clone-450a3.firebaseapp.com",
    projectId: "whatsapp-clone-450a3",
    storageBucket: "whatsapp-clone-450a3.appspot.com",
    messagingSenderId: "260488281369",
    appId: "1:260488281369:web:01d55817afd50794639988",
    measurementId: "G-WTW2FLJFB0"
  };

  return (
    <div className='app'>
      <div className='app_body'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}
export default App;
