import {useForm} from 'react-hook-form'
import{yupResolver} from"@hookform/resolvers/yup"
import React, { useState } from "react";
import * as yup from 'yup';
import "../css/contact.css"
export const Contact = ()=>{

        
        const schema = yup.object().shape({
            FullName:yup.string().required("Your Full Name is Required 👆🏻").min(3).max(30),
            Contact:yup.string().required("Your Contact is Required 👆🏻"),
            Location:yup.string().required("Your Location is Required 👆🏻"),
            Feedback:yup.string(),
        });
        const {register,handleSubmit,formState:{errors}}= useForm({
            resolver:yupResolver(schema)
        })
        const [submit,setSubmit]= useState(false);
          
        const Submit = (data)=>{
            setSubmit(true)
            console.log(data)
            
                
            
            
        }
        
        
        return(
        <div className="contact">
        <div className="banner">
        <h2>Join Us</h2>
        <span>The Day Dreamers Company</span>
        </div>
        {
            submit===false? 
                            <div className="form">
                 <form onSubmit={handleSubmit(Submit)}>
                        <input className="feilds" placeholder="Name" type="text" {...register("FullName")}/>
                        <p className='error'> {errors.FullName?.message}</p>
                        <input className="feilds" placeholder="Any contact info" type="text" {...register("Contact")}/>
                        <p className='error'>{errors.Contact?.message}</p>
                        <input className="feilds"  placeholder="Location" type="text" {...register("Location")}/>
                        <p className='error'>{errors.Location?.message}</p>
                        <textarea className="feilds" placeholder="Feedback for Us"{...register("Feedback")}/>
                       
                        <button className='btn' >Submit</button>
                        
                </form>

        </div>:<div>
                    <h2>Thank You </h2>
                    <h2>Your Form is Submitted</h2>
                    <span>We Will Contact You Soon</span>
        </div>
    
    }
        </div>
    )
}


