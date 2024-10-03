import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();  // Access the loader data here
    const { title, price, service_id, img } = service;

    console.log(service);
    const { user } = useContext(AuthContext)


    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const message = form.message.value;
        const booking = {
            customer_Name: name,
            email,
            img,
            service: title,
            date,
            service: service_id,
            price: parseInt(price),
            message,
        }

        console.log(booking);

        fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Booking Confirmed!",
                        text: "Your service has been booked successfully.",
                        showConfirmButton: true,
                        timer: 15000,  // 
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Booking Failed!",
                        text: "Something went wrong. Please try again.",
                        showConfirmButton: true,
                    });
                }
            })






    }


    return (
        <div>
            <h2>Book service: {title} </h2>  {/* Display service details */}
            <p>Price: {price} </p>

            <div className='flex justify-center my-5'>
                <div className="card w-full shadow-2xl bg-slate-100 mx-20 py-10">

                    <form onSubmit={handleBookService} className="card-body ">
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    defaultValue={user?.displayName}
                                    // placeholder="Your Name" 
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input
                                    type="date"
                                    name='date'
                                    placeholder="Enter date"
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    defaultValue={user?.email}
                                    // placeholder="Email" 
                                    className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount </span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={`$${price}`}
                                    name='price'
                                    placeholder="Amount"
                                    className="input input-bordered"
                                    required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input
                                type="text"
                                name='message'
                                placeholder="Enter your message"
                                className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                value="booking"
                                className="btn btn-primary">Booking Confirm</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Checkout;
