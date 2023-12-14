import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OnlyScroll from 'only-scrollbar';
import {
  fetchImagesWithQuery,
  HITS_PER_PAGE,
  Hit,
  Data
} from '../../Services/fetchImages';
import Searchbar from '../Searchbar';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

// Creating an instance of a class OnlyScroll (adds inertia for increased smoothness)
new OnlyScroll(document.scrollingElement, {
  damping: 0.8,
});

export default function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<Hit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [endOfCollection, setEndOfCollection] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    async function fetchImages() {
      try {
        const response: AxiosResponse<Data> = await fetchImagesWithQuery(query, page);
        const images: Hit[] = response.data.hits;
        validationData(images);
        const totalPages = Math.ceil(response.data.totalHits / HITS_PER_PAGE);
        checkEndCollection(page, totalPages);
        setItems(items => [...items, ...images]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, query]);

  const formSubmitHandler = (search: string): void => {
    setPage(1);
    setQuery(search.trim());
    setItems([]);
    setIsLoading(false);
    setError(false);
    setEndOfCollection(false);
  };

  const loadMore = (): void => {
    setPage(prevState => prevState + 1);
  };

  const validationData = (data: Hit[]) => {
    if (data.length === 0) {
      toast.warn(
        ' Sorry, there are no images matching your search query. Please try again.',
        {
          theme: 'colored',
        }
      );
    }
  };

  const checkEndCollection = (currentPage: number, total: number) => {
    if (currentPage === total) {
      setEndOfCollection(true);
      toast.info("We're sorry, but you've reached the end of search results.", {
        theme: 'colored',
      });
    }
  };

    return (
      <div className='grid grid-cols-1 gap-4 pb-4'>
        <Searchbar onSubmit={formSubmitHandler} />
        <ImageGallery items={items} />
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {items.length > 0 && !endOfCollection && (
          <Button loadMore={loadMore} isSubmitting={isLoading} />
        )}
        <ToastContainer />
      </div>
    );
  }
