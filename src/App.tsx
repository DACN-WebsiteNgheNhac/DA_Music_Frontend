import { Routes, Route } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '~/pages';
import { MainLayout } from '~/layouts';
import 'tippy.js/dist/tippy.css';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/artist" element={<HomePage />} />
            <Route path="/album" element={<HomePage />} />
            <Route path="/radio" element={<HomePage />} />
            <Route path="/postcast" element={<HomePage />} />
         </Route>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
      </Routes>
   );
};

export default App;
