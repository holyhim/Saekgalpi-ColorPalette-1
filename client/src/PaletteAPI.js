import axios from 'axios';

const PaletteGetAPI = () => {
    return axios.get('http://localhost:4000/signin', {
        withCredentials: true,
    });
};
