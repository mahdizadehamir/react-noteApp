//Components
import HomeContainer from '../HomeContainer';
import Navbar from '../Navbar';
import HomeAnimation from '../shared/HomeAnimation';
function HomePage() {
  return (
    <>
      <Navbar />
      <section className=" mx-auto flex flex-row justify-around mt-20">
        <HomeContainer className="order-2" />
        <HomeAnimation  className="order-1"/>
      </section>
    </>
  );
}

export default HomePage;
