"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"


type Props = {
   
}

function Logo({}: Props) {
    const router = useRouter()
  return (
    <Image priority={true} src="/images/logo.png" alt="Logo" className=" hidden md:block cursor-pointer"  height={65} width={130}/>
  )
}

export default Logo