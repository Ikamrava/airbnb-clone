"use client"
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import {User} from "@prisma/client"

type Props = {
  currentUser?: User | null
}

function Navbar({currentUser}: Props) {

  return (
    <nav className=' fixed w-full bg-white z-10 shadow-sm'>
      <div className=' py-4 border-b-2'>
             <Container>
              <div className=' flex flex-row items-center justify-between gap-3 md:gap-0'>
               <Logo/>
               <Search/>
               <UserMenu currentUser={currentUser}/>
              </div>
             </Container>
      </div>
    </nav>
  )
}

export default Navbar