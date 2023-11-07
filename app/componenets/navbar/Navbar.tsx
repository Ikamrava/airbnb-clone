"use client"
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className=' fixed w-full bg-white z-10 shadow-sm'>
      <div className=' py-4 border-b-2'>
             <Container>
              <div className=' flex flex-row items-center justify-between gap-3 md:gap-0'>
               <Logo/>
               <Search/>
               <UserMenu/>
              </div>
             </Container>
      </div>
    </nav>
  )
}

export default Navbar