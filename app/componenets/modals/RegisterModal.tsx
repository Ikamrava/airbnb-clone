"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FaGoogle } from "react-icons/fa"
import { useForm ,SubmitHandler,FieldValues } from "react-hook-form"
import axios from "axios"
import Modal from "./Modal"
import Heading from "../Heading"
import FormInput from "../FormInput"





type Props = {}

function RegisterModal({}: Props) {
  const RegisterModal = useRegisterModal()
  const [isLoading,setIsLoading] = useState(false)


  const {register,handleSubmit,formState:{
      errors,
  }} =useForm<FieldValues>({
    defaultValues:{
      name:"",
      email:"",
      password:"",
        },
  })

  const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
    setIsLoading(true)
    await axios.post("/api/register",data)
    RegisterModal.onClose()
    setIsLoading(false)
  }

  const bodyContent = (
    <div className=" flex flex-col gap-4">
       <Heading title="Welcome to Airbnb" subtitle="Create an account to continue"  />
       <FormInput />
    </div>
  )


  return (
    <Modal 
     disabled={isLoading}
     isOpen={RegisterModal.isOpen}
     title="Register"
     actionLabel="Register"
     onClose={RegisterModal.onClose}
     onSubmit={handleSubmit(onSubmit)}
     body={bodyContent}
     />
  )
}

export default RegisterModal