import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';

function Home() {
  return (
    <div className="">
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home
