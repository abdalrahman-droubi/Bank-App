import "./App.css";
import Navbar from "./component/header";
import Footer from "./component/footer";
import Form from "./component/main";
// import Welcom from "./component/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const initState = {
    accounts: [
      {
        id: 1,
        customerName: "Israa Othman",
        accountNumber: "123456",
        accountType: "Savings",
      },
      {
        id: 2,
        customerName: "Ahmad Zahran",
        accountNumber: "987654",
        accountType: "Student accounts",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Form />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />  }>
            <Route path="/create" element={<Form />} />
            </Route>
            
          
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
