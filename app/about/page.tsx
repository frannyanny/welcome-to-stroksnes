import AboutText from './about.md';
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className='flex flex-col max-w-1/1 lg:max-w-2/3 my-2'>
        <div className='pb-4'>
          <Image src='about_pic.jpg'
            alt='Ørjan and Fran'
            height='2228'
            width='3398'
          />
        </div>

        <div className='prose text-base'>
          <AboutText />
        </div>
      </div>


    </>
  );
}