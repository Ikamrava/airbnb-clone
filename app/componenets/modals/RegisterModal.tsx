"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useForm ,SubmitHandler,FieldValues } from "react-hook-form"
import axios from "axios"
import Modal from "./Modal"
import Heading from "../Heading"
import FormInput from "../FormInput"
import toast from "react-hot-toast"
import Button from "../Button"
import Link from "next/link"





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
    try{
      setIsLoading(true)
      await axios.post("/api/register",data)
      RegisterModal.onClose()
      

    }catch(e){
      toast.error("Something went wrong")
    }
    setIsLoading(false)
    
  }

  const bodyContent = (
    <div className=" flex flex-col gap-4">
       <Heading title="Welcome to Airbnb" subtitle="Create an account to continue"  />
       <FormInput id="email" label="Email" type="email" disable={isLoading} errors={errors} required register={register}/>
       <FormInput id="name" label="Name" type="text" disable={isLoading} errors={errors} required register={register}/>
       <FormInput id="password" label="Password" type="password" disable={isLoading} errors={errors} required register={register}/>
    </div>
  )

  const footerContent = (
    <div className=" flex flex-col gap-4 mt-3">
        <hr />
        <Button outline text="Register with Google" icon={FcGoogle} onClick={()=>{}} />
        {/* <Button outline text="Register with GitHub" icon={AiFillGithub} onClick={()=>{}} /> */}
        <div className=" cursor-pointer text-center" onClick={RegisterModal.onClose}>
          <h3>Already have an account ?<span className=" text-blue-800 cursor-pointer"> Log In</span> </h3>
        </div>

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
     footer={footerContent}
     />
  )
}

export default RegisterModal