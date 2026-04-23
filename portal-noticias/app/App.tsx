import { BrowserRouter, Route, Routes } from "react-router";

import AdminCitiesPage from "~/pages/admin-cities";
import AdminDashboardPage from "~/pages/admin-dashboard";
import AdminTagsPage from "~/pages/admin-tags";
import AdminUfsPage from "~/pages/admin-ufs";
import AuthorCrudPage from "~/pages/author-crud";
import AuthorNewsPage from "~/pages/author-news";
import HomePage from "~/pages/home";
import NotFoundPage from "~/pages/not-found";
import PublicArticlePage from "~/pages/public-article";
import PublicLoginPage from "~/pages/public-login";
import PublicNewsPage from "~/pages/public-news";
import PublicRegisterPage from "~/pages/public-register";
import ReaderFeedPage from "~/pages/reader-feed";
import ReaderProfilePage from "~/pages/reader-profile";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PublicLoginPage />} />
        <Route path="/cadastro" element={<PublicRegisterPage />} />
        <Route path="/noticias" element={<PublicNewsPage />} />
        <Route path="/noticias/mobilidade" element={<PublicArticlePage />} />
        <Route path="/leitor/feed" element={<ReaderFeedPage />} />
        <Route path="/leitor/perfil" element={<ReaderProfilePage />} />
        <Route path="/autor/noticias" element={<AuthorNewsPage />} />
        <Route path="/autor/noticias/crud" element={<AuthorCrudPage />} />
        <Route path="/superadmin" element={<AdminDashboardPage />} />
        <Route path="/superadmin/ufs" element={<AdminUfsPage />} />
        <Route path="/superadmin/cidades" element={<AdminCitiesPage />} />
        <Route path="/superadmin/tags" element={<AdminTagsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
