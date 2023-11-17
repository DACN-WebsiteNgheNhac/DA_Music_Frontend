import { Routes, Route } from 'react-router-dom';
import { AlbumPage, HomePage, LoginPage, RegisterPage, SearchPage } from '~/pages';
import { MainLayout } from '~/layouts';
import 'tippy.js/dist/tippy.css';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:slug" element={<SearchPage />} />
            <Route path="/artist" element={<HomePage />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/radio" element={<HomePage />} />
            <Route path="/postcast" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
         </Route>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
      </Routes>
   );
};

export default App;
