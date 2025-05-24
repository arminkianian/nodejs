import Like from "./components/Like";
import "./App.css";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Liked!")} />
    </div>
  );
}

export default App;
