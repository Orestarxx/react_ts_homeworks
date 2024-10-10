import React, {FC} from 'react';
import './App.css';
import Users from "./components/lessonTwo/Users/Users";
import UsersPlaceHolder from "./components/placeHolderTask/UsersPlaceHolder/UsersPlaceHolder";

const App: FC = () => {
  return (
    <div className="App">
      <Users/>
        <hr/>
        <UsersPlaceHolder/>
    </div>
  );
}

export default App;
