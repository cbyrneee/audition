import LoginComponent from "./components/Login";
import HomeComponent from "./components/Home";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return code ? <HomeComponent code={code} /> : <LoginComponent />;
}

export default App;
