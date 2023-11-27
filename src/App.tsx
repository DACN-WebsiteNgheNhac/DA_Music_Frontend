import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/tippy.css';

import { MainLayout } from '~/layouts';
import {
   AlbumPage,
   HomePage,
   LoginPage,
   SongPage,
   RegisterPage,
   SearchPage,
   LibraryPage,
   PlaylistPage,
   ArtistPage,
} from '~/pages';

const App = () => {
   return (
      <>
         <ToastContainer />
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route path="/" element={<HomePage />} />
               <Route path="/search/:slug" element={<SearchPage />} />
               <Route path="/artist" element={<HomePage />} />
               <Route path="/album/:id" element={<AlbumPage />} />
               <Route path="/song/:id" element={<SongPage />} />
               <Route path="/library" element={<LibraryPage />} />
               <Route path="/playlist/:id" element={<PlaylistPage />} />
               <Route path="/artist/:id" element={<ArtistPage />} />
               <Route path="*" element={<HomePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
         </Routes>
      </>
   );
};

export default App;
