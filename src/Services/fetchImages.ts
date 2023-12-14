import axios, { AxiosResponse } from 'axios';

export interface Hit {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
}

export interface Data {
  totalHits: number;
  hits: Hit[];
}

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '29385448-a71fcce374d47abba8b3fae94';
const options = 'image_type=photo&orientation=horizontal&safesearch=true';
export const HITS_PER_PAGE = 12;

  export const fetchImagesWithQuery = async (query: string, page: number): Promise<AxiosResponse<Data>> => {
    const response: AxiosResponse<Data> = await axios.get(
      `/?key=${API_KEY}&q=${query}&page=${page}&per_page=${HITS_PER_PAGE}&${options}`
    );
    return response;
  };
 