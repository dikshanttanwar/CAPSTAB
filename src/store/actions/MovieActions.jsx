import axios from '../../Utils/axios'
import { loadMovie } from '../reducers/movieSlice'
export { removeMovie } from '../reducers/movieSlice'

export const asyncLoadMovie = (id)=> async (dispatch)=>{

    try {
        
        const details = await axios.get(`/movie/${id}`);
        const externalids = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const credits = await axios.get(`/movie/${id}/credits`);

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

        dispatch(loadMovie(allData));

    } catch (error) {
        console.log(("Error - ",error))
    }

}