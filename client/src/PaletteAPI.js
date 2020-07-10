import axios from 'axios';

export const AllPaletteGetAPI = () => {
    return axios.get('http://54.180.156.40:5000/allPalette', {
        withCredentials: true,
    });
};

export const UniquePaletteGetAPI = (userInfoID) => {
    return axios.get(`http://54.180.156.40:5000/MyPage/${userInfoID}`, {
        withCredentials: true,
    });
};
