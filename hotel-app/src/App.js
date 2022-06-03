import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookHotel from "./components/BookHotel";
import Home from "./components/Home";
import HotelList from "./components/HotelList";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/hotel" element={<HotelList/>} />
           <Route exact path="/hotel/book" element={<BookHotel/>}/>
        </Routes>
      </BrowserRouter>
        
        
    </div>
  );
}

export default App;
