"use client"

import { UseFormRegister, FieldValues ,FieldErrors } from "react-hook-form"

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
    <div>FormInput</div>
  )
}
