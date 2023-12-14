import { Component, MouseEvent, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { Hit  } from '../../Services/fetchImages';

interface IModal {
  image: Hit;
  toggleModal: () => void;
}
const modalRoot: Element | null = document.querySelector('#modal-root');

class Modal extends Component<IModal> {
  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: Event) => {
    const event = e as unknown as KeyboardEvent;
    if ((event as KeyboardEvent).code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackDropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return modalRoot
    ? createPortal(
        <div className='fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-overlayColor' onClick={this.handleBackDropClick}>
          <div className='max-w-calc-vw-48 max-h-calc-vh-24'>
            <img src={image.largeImageURL} alt={image.tags} />
          </div>
        </div>,
        modalRoot
      )
    : null;
    }
}

export default Modal;
