"use client"

import { UseFormRegister, FieldValues ,FieldErrors } from "react-hook-form"

import { BiPound } from "react-icons/bi"

type Props = {
    id: string;
    label: string;
    type?: string;
    disable?:boolean
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export default function FormInput({id,label,type,disable,formatPrice,required,register,errors}: Props) {
  return (
    <div className=" w-full relative">
     {formatPrice && (<BiPound size={24} className = " text-neutral-700 absolute top-5 left-2"/>)}
    
        <input id={id} disabled={disable} {...register(id,{required})} placeholder=" " type={type} className={`peer w-full p-1 pt-6  bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
        ${formatPrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id]  ? " focus:border-rose-500" : " focus:border-black"}
        `
        } />
        <label htmlFor="email" className={`absolute text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] font-semibold
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        
        `}>{label}</label>
    </div>
  )
}
