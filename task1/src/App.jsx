import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PurchaseOrderForm from './components/PurchaseOrderForm';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        {/* Simple Navigation */}
        <nav className="border p-3 bg-light">
          <Link className="me-3" to="/">Home</Link>
          <Link to="/purchase-order">Purchase Order</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h2 className="p-3 mt-5 text-center">Welcome Purchase Order Home</h2>} />
          <Route path="/purchase-order" element={<PurchaseOrderForm/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
