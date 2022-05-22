import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
  

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const onSubmit = async data => {
      await  signInWithEmailAndPassword(data.email, data.password);
    }
    if (error || gError ) {
        // return  signUpError = <p><small className='text-red-600'>{error?.message || gError?.message}</small></p> ;
      }
      if (loading || gLoading ) {
        return <Loading></Loading>;
      }
      if (user || gUser) {
        navigate('/')
      }
    
    
    return (
        <div className='flex justify-center'>
        <div class="card w-96 bg-base-100 shadow-xl ">
    <div class="card-body items-center text-center ">
    <div className='w-full justify-center'>
              <div>
              <h2 className='text-3xl text-primary'>Login</h2>
              
              <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="submit" value="login" className="btn btn-primary max-w-xs text-white w-full" />
   </form>
    <div class="divider">OR</div>
   
   <button className='btn btn-outline btn-primary w-full' onClick={() => signInWithGoogle()}>Continue with Google</button>
              </div>
      </div>
    </div>
  </div>
  </div>
    );
};

export default Login;