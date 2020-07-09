import axios from 'axios';

export const UserGetAPI = () => {
    return axios.get('http://localhost:5000/signin', {
        withCredentials: true,
    });
};

export const SignUpPostAPI = (data) => {
    return axios.post('http://localhost:5000/signUp', data, {
        withCredentials: true,
    });
};

export const SignInPostAPI = (data) => {
    return axios.post('http://localhost:5000/signIn', data, {
        withCredentials: true,
    });
};

export const ChangePasswordPostAPI = (data, userInfoID) => {
    return axios.post(
        `http://localhost:5000/changePassword/${userInfoID}`,
        data,
        {
            withCredentials: true,
        }
    );
};

export const LogoutPostAPI = (data) => {
    return axios.post(`http://localhost:5000/signOut`, data, {
        withCredentials: true,
    });
};

export const AdminPostAPI = (data, id) => {
    return axios.post(`http://localhost:5000/adminPost/${id}`, data, {
        withCredentials: true,
    });
};

export const AdminGetAPI = () => {
    return axios.get(`http://localhost:5000/adminGet`, {
        withCredentials: true,
    });
};
