import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import { useState } from "react";

function App() {
  // const [currentPage, setCurrentPage] = useState("About Me");

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;