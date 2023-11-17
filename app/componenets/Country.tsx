"use client"
import React from 'react'
import Select from 'react-select'
import useCountries from '../hooks/useCountries'

type CountrySelectValue = {
    flag:string;
    label:string;
    value:string;
    region:string;
    latlng:number[]
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange:(value:CountrySelectValue) => void
}

function Country({value,onChange}: CountrySelectProps) {
  const {getAll} = useCountries()
  console.log(getAll())
  return (
    <div>
        <Select 
        classNames={{
            control:()=> "p-3 border-2",
            input:()=> "text-lg",
            option:()=> "text-lg",
    }}
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value)=> onChange(value as CountrySelectValue) }
        formatOptionLabel={(option:any)=>(
            <div className='flex flex-row gap-3 items-center'>
                <div className='w-8 h-8 mr-2'>{option.flag}</div>
                <div>{option.label},
                <span className=' text-neutral-500 ml-1'>{option.region}</span>
                </div>
            </div>
        )}
        />
        
    </div>
  )
}

export default Country