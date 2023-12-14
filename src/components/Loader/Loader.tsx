import { FC } from 'react';
import { Audio } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className='flex justify-center items-center text-buttonColor'>
      <Audio color="#379683" ariaLabel="audio-loading" />
    </div>
  );
};

export default Loader;
