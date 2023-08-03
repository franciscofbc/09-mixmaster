import { Outlet } from 'react-router-dom';
import Navbar from '../components/NAvbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
