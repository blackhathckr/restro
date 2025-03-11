import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restro from './Restro/Restro';
import TermsAndConditions from './Terms&Conditions/termsandcondition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restro />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;