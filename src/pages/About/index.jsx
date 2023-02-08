
import Seo from '../../components/Seo'
import { Banner } from './styles'

const About = () => {
  return (
    <main>
      <Seo title='About' />
      <Banner>
        <h1>
          About
        </h1>

      </Banner>

      <section className='custom-container'>
        <hr className='mb-10'/>
        <h2 className="text-center mb-10">
          Our Company
        </h2>
        <div className='grid gap-8'>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem consequuntur aliquid voluptatum at sint dignissimos aut sit corporis, ad id quo veniam? Minima in pariatur, dolores distinctio exercitationem excepturi.
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime autem voluptatibus sequi voluptatem! Eius impedit minima dignissimos rem quod ipsum eligendi aliquid, obcaecati asperiores reprehenderit eaque sequi voluptas debitis nesciunt?
          </p>
        </div>

      </section>
    </main>
  )
}

export default About
