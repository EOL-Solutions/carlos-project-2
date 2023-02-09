import Earth from '@/components/Earth'
import { Banner } from './styles'
import { BsGithub } from 'react-icons/bs'
import { FaGitlab } from 'react-icons/fa'
import { SiJirasoftware } from 'react-icons/si'
const Home = () => {
  return (
    <main>
      <Banner className='custom-container'>
        <div>
          <h1>Tex title</h1>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='flex gap-8 mt-10'>
            <BsGithub color='white' size={80} />
            <FaGitlab color='white' size={80} />
            <SiJirasoftware color='white' size={80} />
          </div>
        </div>
        <div className='render'>
          <Earth />
        </div>
      </Banner>
    </main>
  )
}
export default Home
