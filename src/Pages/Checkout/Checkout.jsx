import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();  // Access the loader data here
    const {title, price, service_id} = service
    console.log(service);
    

    return (
        <div>
            <h2>Book service: {title} </h2>  {/* Display service details */}
            <p>Price: {price} </p>

            <div className='flex justify-center my-5'>
                <div className="card w-full shadow-2xl bg-slate-100 mx-20 py-10">

                    <form className="card-body ">
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 '>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input 
                                type="text"
                                name='name'
                                placeholder="Your Name" 
                                className="input input-bordered"  required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input 
                                type="date" 
                                name='date' 
                                placeholder="Enter date" 
                                className="input input-bordered"  required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                type="email" 
                                name='email' 
                                placeholder="Email" 
                                className="input input-bordered"  required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount </span>
                                </label>
                                <input 
                                type="text" 
                                defaultValue={'$'+price}
                                
                                placeholder="Amount" 
                                className="input input-bordered"  required />
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Checkout;
