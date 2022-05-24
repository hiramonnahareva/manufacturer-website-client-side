import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ConfirmModal from '../../Shared/ConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email)
    const [click, setclick] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email:${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div className="overflow-x-auto lg:w-full w-96 px-2">

            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Ordered Quentity</th>
                        <th>Parts Name</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.customer}</td>
                                <td>{order.availableQuentity}</td>
                                <td>{order.order}</td>
                                <td>
                                    {(order.price && !order.paid) && <label for="Confirmation" onClick={()=> setclick(order._id)} className="btn modal-button btn-xs btn-primary mr-5">Cancle</label>}
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment:${order?.orderId}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <span className='text-success'>paied</span>}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                click && <ConfirmModal user={user.email} setOrders={setOrders}></ConfirmModal>
            }
        </div>
    );
};

export default MyOrders;