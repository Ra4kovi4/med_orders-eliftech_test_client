import axios from 'axios'

export const fetchPharmById = async (id) => {
    try {
        const { data } = await axios.get(`/pharm/${id}`)
        const pharm = data.data.pharm
        return pharm
    } catch (error) {
        console.log(error)
    }
}
