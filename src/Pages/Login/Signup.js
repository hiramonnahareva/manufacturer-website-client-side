import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import { updateProfile } from 'firebase/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, user, loading,error] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth); 
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    let signUpError;
    const onSubmit = async data => {
      await  createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({displayName: data.name});
    }
    
    

    
      if (error || gError || updateError) {
        return  signUpError = <p><small className='text-red-600'>{error?.message || gError?.message}</small></p> ;
      }
      if (loading || gLoading || updating) {
        return <Loading></Loading>;
      }
      if (user || gUser) {
        navigate(from, { replace: true });
      }
    return (
      <div className='flex justify-center my-5'>
      <div class="card w-96 bg-base-100 shadow-xl ">
  <div class="card-body items-center text-center ">
  <div className='w-full justify-center'>
            <div>
            <h2 className='text-3xl text-primary'>Signup</h2>
            
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
  <label className="label">
  {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  </label>
</div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
  <span className="label-text">Your Password</span>
  </label>
  <input 
  type="password" 
  placeholder="password" 
  className="input input-bordered w-full max-w-xs" 
  {...register("password", { 
      required: {
          value: true,
          message: 'Password is Required'
      },
      minLength: {
      value: 6,
      message: 'Must be 6 characters'
    } })} 
  />
  <label className="label">
  {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
   
  </label>
</div>
        {signUpError}
        <input type="submit" value="Sign Up" className="btn btn-primary max-w-xs text-white w-full" />
 </form>
 </div>
 <p className='pt-2'>Already have an account <Link className='text-secondary ' to='/login'>Please Login</Link></p>
  <div class="divider">OR</div>
 
 <button className='btn btn-outline btn-primary w-full' onClick={() => signInWithGoogle()}>Continue with Google</button>
            
    </div>
  </div>
</div>
</div>

      
    );
};

export default Signup;