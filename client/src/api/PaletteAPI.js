import axios from 'axios';

export const AllPaletteGetAPI = () => {
    return axios.get('http://localhost:5000/allPalette', {
        withCredentials: true,
    });
};

export const UniquePaletteGetAPI = (userInfoID) => {
    return axios.get(`http://localhost:5000/MyPage/${userInfoID}`, {
        withCredentials: true,
    });
};

export const PaletteEditPostAPI = (id, paletteInfo) => {
    return axios.post(`http://localhost:5000/editPalette/${id}`, paletteInfo);
};

export const PaletteCreatePostAPI = (paletteInfo) => {
    return axios.post(`http://localhost:5000/makePalette`, paletteInfo);
};

export const PaletteVisitPostAPI = (id) => {
    return axios.get(`http://localhost:5000/paletteDetailVisit/${id}`);
};

export const PaletteDeleteAPI = (id) => {
    return axios.post(`http://localhost:5000/paletteDetail/${id}`);
};

export const FavPalettesGetAPI = () => {
    return axios.get('http://localhost:5000/visitGet');
};

export const currentPalettesGetAPI = () => {
    return axios.get('http://localhost:5000/updateGet');
};
