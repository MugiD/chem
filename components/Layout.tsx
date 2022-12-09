import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Head>
            <title>Шойын өндірісі</title>
        </Head>
        <nav className='flex justify-between px-10 py-5 bg-blue-900 text-white'>
            <h1 className='font-bold text-xl'>ҚазШойын</h1>
            <div className='flex justify-between gap-7 text-lg font-semibold'>
                <Link href="/" className='hover:text-gray-300 transition-all'>ӨНДІРІС</Link>
                <Link href="/general" className='hover:text-gray-300 transition-all'>МАҢЫЗДЫ</Link>
                <Link href="/posts" className='hover:text-gray-300 transition-all'>МӘСЕЛЕЛЕР</Link>
            </div>
        </nav>
        <section>
            {children}
        </section>
        <footer className='flex justify-between px-4 items-center bg-gray-200 py-5'>
            <h1>Bek | Yerassyl | Eldana | Amirkhan</h1>
            <h1>&copy; All rights reserved</h1>
        </footer>
    </>
  )
}

export default Layout