import { Route, Routes } from 'react-router-dom';

import FullPageLayout from '@components/layout/FullPageLayout';
import DetailPage from '@pages/detail/DetailPage';
import NotFoundPage from '@pages/error/NotFoundPage';
import HomePage from '@pages/home/HomePage';
import SamplePage from '@pages/sample/SamplePage';
import SearchPage from '@pages/search/SearchPage';

export const SoobookRouter = () => {
  return (
    <FullPageLayout>
      <Routes>
        <Route caseSensitive>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail/:isbn" element={<DetailPage />} />
          <Route path="/sample" element={<SamplePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </FullPageLayout>
  );
};
