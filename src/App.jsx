import MusicForm from "./components/Music/MusicForm";
import MusicList from "./components/Music/MusicList";

import MainNavigation from "./components/Layout/MainNavigation";
function App() {
  return (
    <>
      <MainNavigation />
      <div className="container">
        <MusicForm />
        <MusicList />
      </div>
    </>
  );
}

export default App;
