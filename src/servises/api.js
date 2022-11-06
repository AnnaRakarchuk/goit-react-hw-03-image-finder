import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30528443-0adebe35fd9faed8f9ad16b0f';

export const fetchImages = async (query,page) =>{
    const {data} = await axios.get(
        `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
}