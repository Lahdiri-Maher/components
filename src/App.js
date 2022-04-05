import './App.css'; 
import "./Components/Profil/style.css"; 
import FullName from "./Components/Profil/FullName";
import MyAddress from "./Components/Profil/Address";
import ProfilPhoto from "./Components/Profil/ProfilPhoto";
function App() {
  return (
    <div>
      <div className="style">
        <ProfilPhoto />  

        <FullName />

        <br />

        <MyAddress />
      </div>
    </div>
  );
}

export default App;
