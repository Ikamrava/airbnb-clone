"use client"
import React, { use } from 'react'
import Container from '../Container'
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from './CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import { categories } from '@/app/libs/categories'



type Props = {}

function Categories({}: Props) {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathName = usePathname()
  const isMainPage = pathName === "/"
  if(!isMainPage){
    return null
  }

  return (
    <Container>
        <div className=' pt-4 flex flex-row items-center justify-between overflow-x-auto'>
           {categories.map((item) => (
            <CategoryBox key={item.label} icon={item.icon} label = {item.label}  selected={category === item.label}/>
            ))
            }
        </div>
    </Container>
  )
}

export default Categories