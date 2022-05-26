import { success } from 'daisyui/src/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imgStorageKey='3a756175d8da3cf8a08b98649ad47085'
    const onSubmit = data => {
        const image = data.image[0];
            const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,

        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product = {
                  name: data.name,
                  minQuentity: data.minQuentity,
                  price: data.price,
                  availableQuentity: data.availableQuentity,
                  img: img,
                }
                fetch('https://assignment-12-server.onrender.com/product', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data){
                        toast.success('Product added successfuly')
                        reset()
                    }
                    else{
                        toast.error('Failed to add product')
                    }
                })
            }
        })
    };
    return (
        <div>
            <h2 className='text-2xl'>Add New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mini Quentity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="minimum Quentity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQuentity", {
                            required: {
                                value: true,
                                message: 'miniQuentity is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.minQuentity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuentity.message}</span>}
                        {errors.minQuentity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.minQuentity.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Available Quentity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="available Quentity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuentity", {
                            required: {
                                value: true,
                                message: 'availableQuentity is Required'
                            },
                        })}
                    />
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        {errors.price?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Image"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            },
                        })}
                    />
                </div>
                <div className="card-actions justify-end">
                    <input type="submit" value="add" className="btn btn-accent max-w-xs text-white w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddProducts;