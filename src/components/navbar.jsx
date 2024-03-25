'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navlink'

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map((link) => (
                    <NavLink key={link.title} link={link} />
                ))}
            </div>
            {/* LOGO */}
            <div className='md:hidden lg:flex md:w-1/3 justify-center'>
                <Link
                    href='/'
                    className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
                >
                    <span className='text-white mr-1'>Niko</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
                        Crabb
                    </span>
                </Link>
            </div>
            {/* SOCIAL */}
            <div className='hidden md:flex gap-4 w-1/3'>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/github.png' width={24} height={24} alt='' />
                </Link>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/dribbble.png' width={24} height={24} alt='' />
                </Link>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/instagram.png' width={24} height={24} alt='' />
                </Link>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/facebook.png' width={24} height={24} alt='' />
                </Link>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/pinterest.png' width={24} height={24} alt='' />
                </Link>
                <Link href='http://github.com/yeldynov'>
                    <Image src='/linkedin.png' width={24} height={24} alt='' />
                </Link>
            </div>
            {/* Responsive menu */}
            <div className='md:hidden'>
                {/* Menu Button */}
                <button
                    className='w-10 h-8 flex flex-col justify-between z-50 relative'
                    onClick={() => setOpen(!open)}
                >
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-10 h-1 bg-white rounded'></div>
                </button>

                {/* MENU LIST */}
                {open && (
                    <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl '>
                        {links.map((link) => (
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
