
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormUploadImage from './UploadToAWS/FormUploadToAWS';
import DisplayImages from './FileList.js/ImageLists';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<DisplayImages/>}></Route>
        <Route path='/uploadto-Aws' element={<FormUploadImage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
