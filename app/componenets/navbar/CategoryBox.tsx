import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons';
import qs from "query-string"

type Props = {
    key:string;
    label:string;
    icon:IconType;
    selected?:boolean;
}

function CategoryBox({label,icon:Icon,selected}: Props) {
    const router = useRouter()
    const params = useSearchParams()
    
    const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params]);

  return (
    <div onClick={handleClick}  className={`flex
     flex-col
      items-center
       justify-center
        p-3 gap-2 border-b-2
         hover:text-neutral-800
          transition cursor-pointer
           ${selected ? " border-b-neutral-800":" border-transparent"}
           ${selected ? " text-neutral-800":" text-neutral-500"}
           `}>
     <Icon size={26}/>           
    <p className=' text-sm font-medium'>{label}</p>
    </div>
  )
}

export default CategoryBox