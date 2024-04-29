import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserConextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserConextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserConextProvider>
  );
}

export default App;
