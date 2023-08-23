//animations
import NoteAnimation from '../assets/animation_llo1fruc.json';
import Lottie from 'lottie-react';
function HomeContainer() {
  return (
    <>
      <div className="p-3 relative max-w-fit ">
        <div className='absolute top-0 -right-10'>
          <Lottie animationData={NoteAnimation} className="w-20 h-20 top-0 right-0 " />
        </div>
        <div>
          <h3 className="bg-gray-400 border border-solid border-gray-300 p-3  rounded-md">
            Simple Notes Planning Tools
          </h3>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomeContainer;
