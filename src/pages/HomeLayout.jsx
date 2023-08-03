import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Navbar />
      <section className='page'>
        {isLoading
          ? <div className="loading" style={{ margin: '0 auto' }} />
          : <Outlet context={{ value: 'some value' }} />}
      </section>
    </>
  );
};

export default HomeLayout;
