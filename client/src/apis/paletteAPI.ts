import axios, { AxiosResponse } from 'axios';

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

export const favPalettesGetAPI = async () => {
  try {
    const { data }: AxiosResponse<PaletteData[]> = await axios.get(
      'http://localhost:5000/visitGet'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const currentPalettesGetAPI = async () => {
  try {
    const { data }: AxiosResponse<PaletteData[]> = await axios.get(
      'http://localhost:5000/updateGet'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const paletteVisitPostAPI = async (id: number) => {
  try {
    await axios.get(`http://localhost:5000/paletteDetailVisit/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const paletteDeleteAPI = async (id: number) => {
  try {
    await axios.post(`http://localhost:5000/paletteDetail/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paletteCreatePostAPI = async (paletteInfo: object) => {
  try {
    await axios.post(`http://localhost:5000/makePalette`, paletteInfo, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paletteEditPostAPI = async (id: number, paletteInfo: object) => {
  try {
    await axios.post(`http://localhost:5000/editPalette/${id}`, paletteInfo, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allPaletteGetAPI = async () => {
  try {
    const { data }: AxiosResponse<PaletteData[]> = await axios.get(
      'http://localhost:5000/allPalette',
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signatureColorPostAPI = async (id: number, userColor: string) => {
  try {
    await axios.post(`http://localhost:5000/changeSignatureColor/${id}`, {
      signatureColor: userColor,
    });
  } catch (error) {
    console.log(error);
  }
};

export const uniquePaletteGetAPI = (userInfoID: number) => {
  return axios.get(`http://localhost:5000/MyPage/${userInfoID}`, {
    withCredentials: true,
  });
};
