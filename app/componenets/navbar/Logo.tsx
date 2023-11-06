"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"


type Props = {
   
}

function Logo({}: Props) {
    const router = useRouter()
  return (
    <Image src="/images/logo.png" alt="Logo" className=" hidden md:block cursor-pointer"  height={100} width={100}/>
  )
}

export default Logo