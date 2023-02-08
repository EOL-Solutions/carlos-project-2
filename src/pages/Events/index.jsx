import { Banner } from './styles'
// import { MdKeyboardArrowRight } from 'react-icons/md'
import Seo from '../../components/Seo'

export const Events = () => {
  return (
    <main>
      <Seo title='Events' />
      <Banner>
        <div className='custom-container'>
          <h1 className='text-center'>Events</h1>
        </div>
      </Banner>
      <section className='custom-container items-center overflow-x-scroll'>
        <div className='flex justify-between gap-8'>
          <article className="w-[220px] rounded border border-white overflow-hidden shadow-lg">
            <img className="w-full h-20 object-cover" src="https://picsum.photos/400/300" alt="Sunset in the mountains"/>
            <div className="px-4 py-2">
              <div className="font-bold text-xl text-white mb-2">The Coldest Code</div>
              <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatibus quia,

              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#deve</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#code</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#production</small>
            </div>
          </article>
          <article className="w-[220px] rounded border border-white overflow-hidden shadow-lg">
            <img className="w-full h-20 object-cover" src="https://picsum.photos/400/300" alt="Sunset in the mountains"/>
            <div className="px-4 py-2">
              <div className="font-bold text-xl text-white mb-2">The Coldest Code</div>
              <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatibus quia,

              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#deve</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#code</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#production</small>
            </div>
          </article>
          <article className="w-[220px] rounded border border-white overflow-hidden shadow-lg">
            <img className="w-full h-20 object-cover" src="https://picsum.photos/400/300" alt="Sunset in the mountains"/>
            <div className="px-4 py-2">
              <div className="font-bold text-xl text-white mb-2">The Coldest Code</div>
              <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatibus quia,

              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#deve</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#code</small>
              <small className="inline-block bg-gray-200 rounded-full px-2 py-0 font-semibold text-gray-700 mr-2 mb-2">#production</small>
            </div>
          </article>

        </div>

      </section>
    </main>
  )
}
