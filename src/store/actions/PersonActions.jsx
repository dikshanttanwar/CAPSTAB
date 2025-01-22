import axios from '../../Utils/axios'
import { loadperson } from '../reducers/personSlice'
export { removeperson } from '../reducers/personSlice'

export const asyncLoadperson = (id)=> async (dispatch)=>{
    try {
        
        const details = await axios.get(`/person/${id}`);
        const externalids = await axios.get(`/person/${id}/external_ids`);
        const combined_credits = await axios.get(`/person/${id}/combined_credits`);
        const images = await axios.get(`/person/${id}/images`);
        const movie_credits = await axios.get(`/person/${id}/movie_credits`);
        const tv_credits = await axios.get(`/person/${id}/tv_credits`);
        const tagged_images = await axios.get(`/person/${id}/tagged_images`);

        let allData = {
            details : details.data,
            externalids : externalids.data,
            combined_credits : combined_credits.data,
            images : images.data,
            movie_credits : movie_credits.data,
            tv_credits : tv_credits.data,
            tagged_images : tagged_images.data,
        }

        dispatch(loadperson(allData));

    } catch (error) {
        console.log(("Error - ",error))
    }

}