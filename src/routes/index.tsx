import { Routes, Route } from 'react-router-dom';

import { SectionHome } from '../components/MainApp/SectionHome';
import {
  SectionAbout,
  type AvatarURL,
} from '../components/MainApp/SectionAbout';
import { SectionExperiences } from '../components/MainApp/SectionExperiences';

export const Rotas = ({ avatarUrl }: AvatarURL) => {
  return (
    <Routes>
      <Route path="/" element={<SectionHome />} />
      <Route path="/sobre" element={<SectionAbout avatarUrl={avatarUrl} />} />
      <Route path="/experiencias" element={<SectionExperiences />} />
    </Routes>
  );
};
