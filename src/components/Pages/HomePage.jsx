//Components
import HomeContainer from '../HomeContainer';
import Navbar from '../Navbar';
import HomeAnimation from '../shared/HomeAnimation';
function HomePage() {
  return (
    <>
      <Navbar />
      <section className=" mx-auto grid grid-cols-2 justify-center items-center">
        <HomeAnimation />
        <HomeContainer />
      </section>
    </>
  );
}

export default HomePage;
