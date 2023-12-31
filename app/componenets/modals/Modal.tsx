"use client"


import {IoMdClose} from 'react-icons/io'
import { useCallback, useEffect, useState } from 'react'
import Button from '../Button';


type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?:React.ReactElement
  footer?:React.ReactElement
  actionLabel: string;
  disabled?:boolean
  secondaryAction?: () => void;
  secondarylable?:string
}

function Modal({isOpen,onClose,onSubmit,title,body,footer,actionLabel,disabled,secondaryAction,secondarylable}: Props) {
  const [showModel,setShowModel] = useState(isOpen)

  useEffect(()=>{
    setShowModel(isOpen)
  },[isOpen])

  const handleClose = useCallback(()=>{
    if(disabled){
      return
    }
    setShowModel(false)
    setTimeout(()=>{
      onClose()
    
    })
  },[disabled,onClose])

  const handleSubmit = useCallback(()=>{
    if(disabled){
      return
    }
    onSubmit()
  },[disabled,onSubmit])

  const handleSecondaryAction = useCallback(()=>{
    if(disabled || !secondaryAction){
      return
    }
    secondaryAction()
  },[disabled,secondaryAction])

  if(!isOpen){
    return null
  }


  return (
    <>
    <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
          <div className=' relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto '>
            <div className={`translate duration-300 h-full ${showModel? "translate-y-0": "translate-y-full"} ${showModel? " opacity-100": " opacity-0"}`}>
              <div className='translate h-full lg:h-auto md:h-auto border-r-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none '>
                  
                  <div className=' flex items-center p-2 rounded-t justify-center relative border-b-[1px]'>
                    <button onClick={handleClose} className=' p-1 border-0 hover:opacity-70 transition absolute left-9'>
                      <IoMdClose size={18} />
                    </button>
                    <div className=' text-lg font-semibold'>
                      {title}
                    </div>
                  </div>

                  <div className=' relative px-6 py-2  flex-auto'>
                      {body}
                  </div>

                  <div className=' flex flex-col gap-2 p-6'>
                    <div className=' flex flex-row items-center gap-4 w-full'>
                      {secondaryAction && secondarylable && (
                         <Button outline disabled = {disabled} onClick={secondaryAction} text={secondarylable} small />
                      ) }
                      
                      <Button disabled = {disabled} onClick={handleSubmit} text={actionLabel} small />
                    </div>
                    {footer}
                  </div>

              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Modal