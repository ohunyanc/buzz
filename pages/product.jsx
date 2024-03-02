import { getSession } from 'next-auth/react'
import React from 'react'

export default function Product() {
  return (
    <div>
        <h1>Product Page</h1>
    </div>
  )
}

export async function getServerSideProps({req}){
    const session = await getSession({req}) 
 
    if(!session){
     return{
         redirect:{
             destination:"/login",
             permanent:false
         }
     }
    }
 //authorize user return session 
    return {
     props:{session}
    }
 }