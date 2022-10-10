import logo from './logo.svg';
import './App.css';
import { router } from './Components/router'
import { RouterProvider } from 'react-router-dom';
// slick styling added in app.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;




// https://openapi.programming-hero.com/api/quiz

// https://openapi.programming-hero.com/api/quiz/${id}