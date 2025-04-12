import axiosInstance from "../components/axios";

export async function OpenAi(object) {
    try {
        const response = await axiosInstance.post('home/needPrescription', JSON.stringify(object)); 
        console.log('Data submitted:', response);
        return response;
    } catch (error) {
        console.error('Error submitting data:', error);
    }
}

