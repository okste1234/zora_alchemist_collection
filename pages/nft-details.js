import React, { useState } from 'react'
import Image from 'next/image';
import NftImage from "../assets/nft10.jpg"
import arrowIcon from "../assets/arrow.png"
import zorbIcon from "../assets/Zorb.png"
import { FaShare } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const NFTDetails = () => {
    const originalText = "Sythe is a visionary leader who loves to see people around him win. He sets ambitious goals and is committed to transforming ideas into reality. Sythe is a visionary in the tech world, foreseeing a future where widespread financial inclusion is not merely an aspiration, leveraging his strategic insights and expertise in blockchain technology. His calculated moves and insightful decisions make him a mentor for those aspiring to navigate the crypto investment landscape. His strategic mindset and unwavering focus encourage us to be bold in our pursuits.";

    const [showMore, setShowMore] = useState(false);
  
    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  
    const displayText = showMore
      ? originalText
      : `${originalText.split(' ').slice(0, 40).join(' ')}...`;
  
    const buttonText = showMore ? 'less' : 'more';
    return (
        <div className='flex justify-between my-8 lg:flex-row flex-col w-[90%] lg:w-[80%] mx-auto'>
            <section className='w-[100%] lg:w-[55%]'>
                <Image 
                src={NftImage.src}
                alt=''
                width={700}
                height={700}
                />
            </section>
            <section className='w-[100%] lg:w-[35%]'>
                <h2 className='text-[1.8rem] font-bold'>Sythe Alchemist Character</h2>
                <div className='my-4 flex'>
                <Image 
                src={NftImage.src}
                alt=''
                width={50}
                height={50}
                />
                <h3 className='ml-4 font-bold'>Alchemist 4.0 characters <br></br><span className='font-[400]'>Covalent</span></h3>
                <div className='ml-auto'>
                    <button className='bg-black text-white p-2 text-[1.2rem] rounded-md mr-2'><FaShare /></button>
                <button className='bg-black text-white p-2 text-[1.2rem] rounded-md'><HiDotsHorizontal /></button>
                </div>
                </div>
                <div>
                <p className='my-6 text-[0.89rem]'>{displayText}</p>
                <a href="#" onClick={toggleShowMore} className='my-4 font-bold'>{buttonText}</a>
                </div>
                <div className='border-t border-gray-400 py-8 mt-4'>
                <h3 className='flex justify-between text-gray-500 my-2 text-[0.9rem]'>First minter <span className='text-black'>Covalent</span></h3>
                <h3 className='flex justify-between text-gray-500 my-2 text-[0.9rem]'>Top minter <span className='text-black truncate'>0xadfb97961950b5894438c1c2f461695c023e2e14</span></h3>
                <h3 className='flex justify-between text-gray-500 my-2 text-[0.9rem]'>Mint start <span className='text-black'>February 23, 2024</span></h3>
                <h3 className='flex justify-between text-gray-500 my-2 text-[0.9rem]'>Creator earnings <span className='text-black'>0.000888 ETH</span></h3>
                <h3 className='flex justify-between text-gray-500 my-2 text-[0.9rem]'>Unique minters <span className='text-black'>3</span></h3>
                </div>
            </section>
        </div>
    )
}

export default NFTDetails;