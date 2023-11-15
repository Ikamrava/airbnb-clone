"use client"

import {signIn} from "next-auth/react"
import { useCallback, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useForm ,SubmitHandler,FieldValues } from "react-hook-form"
import axios from "axios"
import Modal from "./Modal"
import Heading from "../Heading"
import FormInput from "../FormInput"
import toast from "react-hot-toast"
import Button from "../Button"
import useLoginModal from "@/app/hooks/useLoginModal"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useRouter } from "next/navigation"

type Props = {}

function LoginModal({}: Props) {
  const router = useRouter()
    const RegisterModal = useRegisterModal()
    const loginModal = useLoginModal()
  const [isLoading,setIsLoading] = useState(false)

  const {register,handleSubmit,formState:{
      errors,
  }} =useForm<FieldValues>({
    defaultValues:{
      email:"",
      password:"",
        },
  })

  const onSubmit:SubmitHandler<FieldValues> = async(data)=>{
    setIsLoading(true)
    try{
      await signIn("credentials",{
        ...data,
        redirect:false,
        
      }).then((callback)=>{
        setIsLoading(false)
        if(callback?.ok){
          toast.success("Logged in")
          router.refresh()
          loginModal.onClose()
        }
        if(callback?.error){
          toast.error(callback.error)
        }
        
      })
   
      

    }catch(e){
      toast.error("Something went wrong")
    }
    setIsLoading(false)
    
  }

  const toggle = useCallback(()=>{
        loginModal.onClose()
        RegisterModal.onOpen()
  },[loginModal,RegisterModal])

  const bodyContent = (
    <div className=" flex flex-col gap-4">
       <Heading title="Welcome back" subtitle="Login to your account!"  />
       <FormInput id="email" label="Email" type="email" disable={isLoading} errors={errors} required register={register}/>
       <FormInput id="password" label="Password" type="password" disable={isLoading} errors={errors} required register={register}/>
    </div>
  )

  const footerContent = (
    <div className=" flex flex-col gap-4 mt-3">
        <hr />
        <Button outline text="Continue with Google" icon={FcGoogle} onClick={() => signIn('google')} />
         <Button 
          outline 
          text="Continue with Github"
          icon={AiFillGithub}
          onClick={() => signIn('github')}
      />
        <div className=" cursor-pointer text-center" onClick={toggle}>
          <h3>First time using Airbnb? <span className=" text-blue-800 cursor-pointer"> Create an account</span> </h3>
        </div>

    </div>
  )

  return (
     <Modal 
     disabled={isLoading}
     isOpen={loginModal.isOpen}
     title="Login"
     actionLabel="Login"
     onClose={loginModal.onClose}
     onSubmit={handleSubmit(onSubmit)}
     body={bodyContent}
     footer={footerContent}
     />
  )
}

export default LoginModal