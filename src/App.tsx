import React, {FC} from 'react';
import './App.css';
import Users from "./components/lessonTwo/Users/Users";
import UsersPlaceHolder from "./components/placeHolderTask/UsersPlaceHolder/UsersPlaceHolder";
import RickAndMortys from "./components/rickAndMortyComponents/rickAndMortys/RickAndMortys";

const App: FC = () => {
  return (
    <div className="App">
      {/*<Users/>*/}
      {/*  <hr/>*/}
      {/*  <UsersPlaceHolder/>*/}
      <hr/>
      <RickAndMortys/>
    </div>
  );
}

export default App;
