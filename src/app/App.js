import GreetingContainer from '../containers/GreetingContainer';
import SignContainer from 'containers/SignContainer/SignContainer';
import PhotoList from '../components/BackGround/PhotoList';
import TodoContainer from 'containers/TodoContainer';

function App() {
  return (
    <>
      <PhotoList />
      <GreetingContainer />
      <SignContainer />
      <TodoContainer />
    </>
  );
}

export default App;
