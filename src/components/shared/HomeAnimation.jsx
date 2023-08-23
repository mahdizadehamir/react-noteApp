import Lottie from 'lottie-react';
import { useEffect, useRef } from 'react';
import animationData from '../../assets/animation_ll9itlkk.json';
function HomeAnimation() {
  const lottieRef = useRef();
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.7);
      lottieRef.current.playSegments([10, 110], true);
    }
  }, [lottieRef]);
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: '500px', height: '500px' }}
        lottieRef={lottieRef}
      />
    </div>
  );
}

export default HomeAnimation;
