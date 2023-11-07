import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';
import { MainLayout } from '~/layouts';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
         </Route>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
      </Routes>
   );
};

export default App;
