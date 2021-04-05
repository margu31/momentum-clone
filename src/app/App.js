import GreetingContainer from '../containers/GreetingContainer';
import SignContainer from 'containers/SignContainer/SignContainer';
import PhotoList from '../components/BackGround/PhotoList';

function App() {
  return (
    <>
      <PhotoList />
      <GreetingContainer />
      <SignContainer />
    </>
  );
}

export default App;
