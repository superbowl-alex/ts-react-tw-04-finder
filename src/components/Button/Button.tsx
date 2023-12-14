import { FC } from 'react';

interface IButton {
  loadMore: () => void;
  isSubmitting: boolean;
}

const Button: FC<IButton> = ({ loadMore, isSubmitting }) => {
  return (
    <button className='w-52 mx-auto py-2 px-4 rounded bg-buttonColor text-primaryBacground text-xl font-medium min-w-[180px] shadow-lg hover:bg-buttonHoverColor hover:scale-[1.03] focus:bg-buttonHoverColor focus:scale-[1.03] transition-all duration-300' type="button" onClick={loadMore} disabled={isSubmitting}>
      Load more
    </button>
  );
};

export default Button;
