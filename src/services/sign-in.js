import axiosInstance from "../components/axios";

export async function signIn(email, password) {
    const data = {
        email: email,
        password: password
    };
    try {
        const response = await axiosInstance.post('user/login', JSON.stringify(data)); 
        console.log('Data submitted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting data:', error);
    }
}

