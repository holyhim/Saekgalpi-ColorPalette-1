import axios from 'axios';

type PaletteResponse = {
  data: PaletteData[];
};

export type PaletteData = {
  id: number;
  userId: number;
  paletteName: string;
  description: string;
  colorCode01: string;
  colorCode02: string;
  colorCode03: string;
  colorCode04: string;
  colorCode05: string;
  colorCode06: string;
  colorCode07: string;
};

export const FavPalettesGetAPI = () => {
  return axios.get<PaletteResponse>('http://localhost:5000/visitGet');
};

export const CurrentPalettesGetAPI = () => {
  return axios.get('http://localhost:5000/updateGet');
};

export const AllPaletteGetAPI = () => {
  return axios.get('http://localhost:5000/allPalette', {
    withCredentials: true,
  });
};

export const UniquePaletteGetAPI = (userInfoID: number) => {
  return axios.get(`http://localhost:5000/MyPage/${userInfoID}`, {
    withCredentials: true,
  });
};

export const PaletteEditPostAPI = (id: number, paletteInfo: object) => {
  return axios.post(`http://localhost:5000/editPalette/${id}`, paletteInfo);
};

export const PaletteCreatePostAPI = (paletteInfo: object) => {
  return axios.post(`http://localhost:5000/makePalette`, paletteInfo);
};

export const PaletteVisitPostAPI = (id: number) => {
  return axios.get(`http://localhost:5000/paletteDetailVisit/${id}`);
};

export const PaletteDeleteAPI = (id: number) => {
  return axios.post(`http://localhost:5000/paletteDetail/${id}`);
};
