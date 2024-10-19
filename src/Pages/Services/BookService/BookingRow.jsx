import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id,img, email, date, customer_Name, price, service, status } = booking;



    return (
        <div>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            <tr className=''>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                </th>
                <td>
                    <div className="avatar">
                        <div className=" rounded-full h-16 w-16">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <div className='font-medium'>
                    <td> {customer_Name} </td>
                    <td> {service} </td>
                    <td> {email} </td>
                    <td> ${price} </td>
                    <td> {date} </td>
                </div>

                <th>
                    {
                        status === 'confirm' ? <span className='font-medium text-primary'> Confirmed </span> :
                        <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs"> Please Confirm Booking </button>
                    }                
                </th>
            </tr>

        </div>
    );
};

export default BookingRow;