import React from 'react';
import { toast } from 'react-toastify';

const ConfirmModal = ({id , setOrders}) => {
    console.log(id)
   const handleDelete = () => {
    fetch (`http://localhost:5000/order/${id}`,{
      method: 'DELETE',
      headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
      

  })
  .then(res => res.json())
  .then(data => {
     
     if(data.deletedCount){
      toast.success(`${data.name} is deleted.`)
     }
     else{
       toast.error(`something is wrong`)
     }
  })

    }
    return (
        <div>
<input type="checkbox" id="Confirmation" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are You sure to Delete!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
    <button onClick={() => handleDelete()} className="btn btn-xs btn-error">delete</button>
      <label for="Confirmation" className="btn  btn-xs btn-primary">cancle</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmModal;