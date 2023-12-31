"use client"
import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'
import { useState } from 'react'
import { useMemo } from 'react'
import { on } from 'events'
import Heading from '../Heading'
import { categories } from '@/app/libs/categories'
import CategoryInput from '../CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'
import Country from '../Country'

type Props ={}
enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES=3,
  DESCRIPTION = 4,
  PRICE = 5
}

function RentModal({}: Props) {
    const rentModal = useRentModal()
    const [step,setStep] = useState(STEPS.CATEGORY)
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      setValue,
      reset
    } = useForm<FieldValues>({
        defaultValues: {
          category: '',
          location: null,
          guestCount:1,
          roomCount:1,
          bathroomCount:1,
          imageSrc:'',
          description:'',
          price:1,
          title:""
        }
    })

    const category = watch('category')

    const setCustomValue = (id:string,value:any)=>{
      setValue(id,value,{
        shouldValidate:true,
        shouldDirty:true,
        shouldTouch:true
      })
    }

    const onBack = () => {
      setStep((value)=> value - 1)
    }

    const onNext = () => {
      setStep((value)=> value + 1)
    }

    const actionLabel = useMemo(()=>{
      if(step === STEPS.PRICE){
        return 'Create'
      }
      return 'Next'
    },[step])

      const secondatyActionLabel = useMemo(()=>{
      if(step === STEPS.CATEGORY){
        return 'Undefined'
      }
      return 'Back'
    },[step])

    let bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
         title='Which of these best describes your place'
         subtitle='Choose the category that best fits your space'
        />
        <div className=' grid grid-col-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
            {categories.map((item)=>(
              <div key={item.label} className=' col-span-1'>
                <CategoryInput
                  onClick = {(category)=>setCustomValue("category",category)}
                  selected = {category === item.label}
                  label={item.label}
                  icon = {item.icon}
                />
              </div>
            ))}
        </div>
      </div>
    )

    if(step === STEPS.LOCATION){
      bodyContent = (
        <div className='flex flex-col gap-8'>
          <Heading 
          title='Where is your place located?'
          subtitle='Help guest find you!'
          />
          <Country />
        </div>
      )
    }


  return (
    <Modal
    title='Airbnb your home!'
    isOpen={rentModal.isOpen}
    onClose={rentModal.onClose}
    onSubmit={onNext}
    actionLabel={actionLabel}
    secondarylable={secondatyActionLabel}
    secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    body={bodyContent}
    />
  
  )
}

export default RentModal