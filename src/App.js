import './App.css';
import Alldata from './Alldata';
import SingleData from './SingleData';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Alldata />} />
          <Route path="single-data/:id" element={<SingleData />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
