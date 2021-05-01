import LoginComponent from "./Login";
import HomeComponent from "./Home";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
    return code ? <HomeComponent code={code} /> : <LoginComponent />;
}

export default App;
