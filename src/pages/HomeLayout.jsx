import { Outlet } from 'react-router-dom';
import Navbar from '../components/NAvbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
