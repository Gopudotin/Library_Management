import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import BooksList  from "./Components/books-list/books-list.js";
import Loginpage from "./Components/login/loginpage.js";


function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Loginpage />}>
          </Route>
          <Route path="/books" element={<BooksList />}>
          </Route>
        </Routes>
</Router>);}
export default App;