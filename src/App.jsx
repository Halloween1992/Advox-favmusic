import MusicForm from "./components/Music/MusicForm";
import MusicList from "./components/Music/MusicList";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Layout>
      <MusicForm />
      <MusicList />
    </Layout>
  );
}

export default App;
