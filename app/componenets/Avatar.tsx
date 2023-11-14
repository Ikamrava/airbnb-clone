"use client"

import Image from "next/image"

type Props = {
  src:string | null | undefined

}

function Avatar({src}: Props) {
  return (
    <Image className=" rounded-full" width={30} height={30} src={src || "/images/placeholder.jpg"} alt="Avatar"  />
  )
}

export default Avatar