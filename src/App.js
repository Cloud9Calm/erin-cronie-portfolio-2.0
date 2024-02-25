import '../src/styles/partials/_global.scss';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <Header />
      <Profile />
    </div>
  );
}

export default App;
