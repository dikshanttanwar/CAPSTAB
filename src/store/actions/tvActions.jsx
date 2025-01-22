import axios from '../../Utils/axios'
import { loadtv} from '../reducers/tvSlice';
export { removetv } from '../reducers/tvSlice';

export const asyncLoadtv = (id)=> async (dispatch)=>{

    try {
        
        const details = await axios.get(`/tv/${id}`);
        const externalids = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const credits = await axios.get(`/tv/${id}/credits`);

        let allData = {
            details : details.data,
            externalids : externalids.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find(m => m.type == "Trailer"),
            watchprovider : watchprovider.data.results.IN,
            translations : translations.data.translations.map((e)=>e.english_name),
            credits : credits.data,
        }

        dispatch(loadtv(allData));

    } catch (error) {
        console.log(("Error - ",error))
    }

}