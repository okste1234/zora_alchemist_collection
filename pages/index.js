import Image from 'next/image';
import { Banner } from '../components'
import Link from 'next/link';

import images from "../assets"

const Home = () => {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          src={images.alchemist}
          name={(<>Alchemist 4.0 <br /> Characters</>)}
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyle="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />
      </div>
    <Link href="/nft-details">
      <div> Click me</div>
    </Link>
    </div>
  )
}

export default Home