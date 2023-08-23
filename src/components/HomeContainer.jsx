//animations
import NoteAnimation from '../assets/animation_llo1fruc.json'
import Lottie from 'lottie-react'
function HomeContainer() {
  return (

    <>
        <div className="p-3 relative max-w-sm bg-gray-400 border border-solid border-gray-300 rounded-md">
            <Lottie
            animationData={NoteAnimation}
            className='w-20 h-20 absolute -bottom-2 -right-10 '
             />
            <h3>Simple Notes Planning Tools</h3>
        </div>
        <div>
          
        </div>
    </>
  )
}

export default HomeContainer