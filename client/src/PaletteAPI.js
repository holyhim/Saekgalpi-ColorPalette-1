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
