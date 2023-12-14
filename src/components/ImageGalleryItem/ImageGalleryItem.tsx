import { Component } from 'react';
import Modal from '../Modal/Modal';
import { Hit  } from '../../Services/fetchImages';

interface IImageGalleryItem {
  item: Hit;
}

interface IImageGalleryItemState {
  isModalOpen: boolean;
}

class ImageGalleryItem extends Component<IImageGalleryItem, IImageGalleryItemState> {
  constructor(props: IImageGalleryItem) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className='rounded shadow-lg'>
        <img className='w-full h-64 object-cover hover:cursor-zoom-in hover:scale-[1.03] transition-all duration-300'
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && <Modal image={item} toggleModal={this.toggleModal} />}
      </li>
    );
  }
}

export default ImageGalleryItem;
