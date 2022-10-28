import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Tutor from './components/Tutor';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Hello />
      <Welcome name ='Sylvester Ouma' heroName= 'James' />
      <Welcome name ='Edward Bwoga' heroName= 'Henimanns' />
      <Welcome name ='Maurice Otieno' heroName= 'Marcel' /> */}
    <Tutor position = "1" name= 'Sylvester' javascriptLibrary= 'React' professional='tutor' fullName='Sylvester Ouma' age='32'>
      <p>This is children props</p>
      </Tutor>
    <Tutor position = "2" name= 'Edward' javascriptLibrary= 'Angular' professional='tutor' fullName='Edward Bwoga' age='31'>
      <button>Action</button>
      </Tutor>
    <Tutor position = "3" name= 'Maurice' javascriptLibrary= 'jQuery' professional='tutor' fullName='Maurice Otieno' age='33'>
    </Tutor>
    </div>
  );
}

export default App;
