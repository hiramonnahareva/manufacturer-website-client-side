import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Modal = ({ order, setOrder }) => {
    const {_id, name, availableQuentity} = order;
    const formSubmit = event => {
        event.preventDefault();
        const availableQuentity = event.target.available.value;
        console.log(_id,availableQuentity,  name );
        setOrder(null);
        
    }
    console.log(order)
    // const { name, availableQuentity } = order;
    const [user] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="Order-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="Order-modal" class="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg my-2">Ordered Item {name} </h3>
                    <form onSubmit={formSubmit}>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs my-2" />

                        <select name='available' className="select select-bordered w-full max-w-xs">
                            {
                                availableQuentity && availableQuentity.map((available, index) => <option key={index} value={available}>{available}</option>)
                            }
                        </select>
                        <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='Address' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value='submit' className="input text-center text-xl text-white bg-primary w-full max-w-xs my-2" />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Modal;