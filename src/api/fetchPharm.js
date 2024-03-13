import axios from 'axios'

axios.defaults.baseURL = 'https://delivery-service-rclm.onrender.com/api/'

export const fetchPharm = async () => {
    try {
        const { data } = await axios.get('/pharm')

        return data
    } catch (error) {
        console.log(error)
    }
}
