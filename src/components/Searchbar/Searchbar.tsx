import { FC } from 'react';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { Form, Field } from 'formik';


interface ISearchbar {
  onSubmit: (search: string) => void;
}

const Searchbar: FC<ISearchbar> = ({ onSubmit }) => {
  const handleSubmit = async (values: { search: string }) => {
    await onSubmit(values.search);
  };
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <header className='sticky top-0 left-0 z-50 flex justify-center items-center min-h-[64px] py-4 text-white bg-secondaryBacground shadow-lg'>
          <Form className='flex items-center w-full max-w-xl bg-white rounded overflow-hidden'>
            <button className='flex items-center justify-center border-none w-12 h-12 bg-primaryBacground opacity-60 outline-none transition-all duration-300 hover:bg-buttonColor hover:opacity-100' type="submit" disabled={isSubmitting}>
              <FcSearch size={28} />
            </button>
            <Field className='inline-block w-full text-xl text-buttonHoverColor border-none outline-none px-1 placeholder:text-base placeholder:text-buttonColor'
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </header>
      )}
    </Formik>
  );
};

export default Searchbar;
