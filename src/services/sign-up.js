import axiosInstance from "../components/axios";

export async function signUp(name, phoneNumber, email, password) {
    const data = {
        name: name,
        email: email,
        phone: phoneNumber,
        password: password,
    };
    try {
        const response = await axiosInstance.post('user/signup', JSON.stringify(data)); 
        return response?.data
    } catch (error) {
        console.error('Error submitting data:', error);
    }
}

