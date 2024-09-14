import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/Error';
import { Landing } from './pages/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
