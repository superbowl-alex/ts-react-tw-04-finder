import { FC } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Hit  } from '../../Services/fetchImages';

interface IImageGallery {
  items: Hit[];
}

const ImageGallery: FC<IImageGallery> = ({ items }) => {
  return (
    <ul className='grid max-w-calc-vw-48 grid-cols-gallery-template gap-4 mx-auto my-0 p-0 list-none'>
      {items.map((item: Hit) => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
