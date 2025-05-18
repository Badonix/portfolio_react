import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

export const DevMode = ({ setDevMode }) => {
  console.log('JAsk')
  return (
    <section className='md:h-screen w-screen flex justify-center items-center absolute p-4 md:pb-4 pb-24'>
      <div className='relative flex flex-col justify-center items-center border border-white rounded-md py-4 md:px-40 px-6 h-auto w-full max-w-5xl'>
        <p className='text-white'>
          Hi, this website is outdated but has some rough source code and I
          honestly don’t have time to rewrite it, so I’ll just briefly introduce
          myself and link my CV here. I'm Nick, currently a first-year student
          at{' '}
          <a
            href='https://freeuni.edu.ge'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange-400 underline'
          >
            Free University of Tbilisi
          </a>
          , studying Math and Computer Science for my bachelor's degree.
          <br />
          <br />I graduated from{' '}
          <a
            href='https://komarovi.edu.ge'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange-400 underline'
          >
            Komarovi School
          </a>
          , and I’ve been coding for about 3 years before uni—mainly focused on
          web development using React/Next.js, Laravel, and Node.js.
          <br />
          <br />I also had the chance to intern as a fullstack developer at{' '}
          <a
            href='https://redberry.international'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange-400 underline'
          >
            Redberry International
          </a>
          , working with Next.js and Laravel.
          <br />
          <br />
          These days, I’m diving deep into algorithms and competitive
          programming. I’ve also taken part in a few hackathons, game jams, and
          CP competitions. For example me and my friends won Tbilisi Competitive
          Programming Competition and{' '}
          <a
            target='_blank'
            href='https://proggy-buggy.com/'
            className='text-orange-400 underline'
          >
            Proggy Buggy Contest
          </a>{' '}
          in Georgia.
          <br />
          <br />
          Thats it, you can download my{' '}
          <a className='text-red-400 underline' href='/assets/cv.pdf' download>
            CV from here
          </a>
          , just in case if you wanna view full website{' '}
          <a
            className='text-red-300 underline'
            onClick={() => setDevMode(false)}
          >
            click here
          </a>
        </p>
      </div>
    </section>
  )
}

export default DevMode
