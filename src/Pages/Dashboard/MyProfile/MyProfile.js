import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [currentuser, setCurrent] = useState({})
    // const [updateUser, setupdateUser] = useState({});
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const [user] = useAuthState(auth) 
    useEffect(()=> {
    if(user){
            fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrent(data))
        }
    }, [user])
    const onSubmit = data => {
        const {_id} = currentuser;
        const {name, email} = data;
        const updateUser = { name, email};
        const url = `http://localhost:5000/user/${_id}`;
        fetch (url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then (res => res.json())
        .then (data => {
            console.log ('success', data);
            toast('user added successfully');
            reset();
        })
    }
    return (
        <div class="card w-[60%] bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">UPDATE PROFILE</h2>
          {/* <p class="text-[18px]">your email account: <span className='text-secondary'>{user?.email}</span></p> */}
          <p>If you update your profile Please fill this form add update</p>
          <form onSubmit={handleSubmit(onSubmit)}>
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <input 
  type="text"
   placeholder="Your Name"
    className="input input-bordered w-full max-w-xs"
    {...register("name", { 
        required: {
            value: true,
            message: 'Name is Required'
        },
     })} 
     />
  <label className="label">
  {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
  </label>
</div>
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input 
  type="email"
   placeholder="Your Email"
    className="input input-bordered w-full max-w-xs"
    {...register("email", { 
        required: {
            value: true,
            message: 'Email is Required'
        },
        pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Provide a Valid Email'
      }
     })} 
     />
     <input type="submit" value="login" className="btn btn-primary max-w-xs text-white w-full my-4" />
     </div>
     </form>
          </div>
      </div>
    );
};

export default MyProfile;