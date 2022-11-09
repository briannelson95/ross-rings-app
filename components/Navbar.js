import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/modules'
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react';

const Navbar = ({ navigation, mobileMenu, logo }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className="bg-white text-black w-screen h-16 shadow-md shadow-light-blue-100/50 overflow-hidden">
            {/* mobile menu */}
            {menuOpen ?                <>
                    <div className='bg-slate text-white w-3/4 h-screen absolute top-0 left-0 flex flex-col items-center translate-x-0 ease-in-out duration-300'>
                        <Image 
                            src={logo}
                            height={150}
                            width={150}
                        />
                        {navigation.map((item, index) => (
                            <Link 
                                key={index} 
                                href={`/${item.slug.current}`}
                                className='flex items-center my-4 text-3xl text-dark-blue-900 hover:text-white ease-in-out duration-200'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </>
                : <div className='-translate-x-0 ease-in-out duration-200'></div>
            }
            <div className="h-full flex justify-between items-center mx-4 md:hidden">
                <HiMenu height={40} width={40} className='text-2xl ml-2' onClick={() => setMenuOpen(true)} />
                <Link href="/">
                    <Image 
                        src={urlFor(mobileMenu[1]).url()} 
                        width={50}
                        height={50}
                    />
                </Link>
                <Link href={`/${navigation[1].slug.current}`}>
                    {navigation[1].title}
                </Link>
            </div>
            {/* desktop nav */}
            <div className='hidden md:flex h-full mx-8'>
                    <Link href="/" className='first:mr-auto'>
                        <Image 
                            src={logo}
                            height={120}
                            width={120}
                        />
                    </Link>
                    {navigation.map((item, index) => (
                        <Link 
                            key={index} 
                            href={`/${item.slug.current}`}
                            className='flex items-center mx-6'
                        >
                            {item.title}
                        </Link>
                    ))}
            </div>
        </nav>
    );
}
 
export default Navbar;