import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';

export default function App() {
    return (
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Tour />} />
            </Routes>
        </BrowserRouter>
    );
}
