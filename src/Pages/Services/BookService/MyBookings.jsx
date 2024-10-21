import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {  // Ensure email exists before making the fetch call
            const url = `http://localhost:4000/booking?email=${user.email}`;

            fetch(url)
                .then((res) => res.json())
                .then((data) => setBookings(data))
                .catch((error) => console.error("Error fetching bookings:", error));
        }
    }, []);


    // const handleDelete = id => {

    //     const proceed = Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     })

    //     if (proceed) {

    //         fetch(`http://localhost:4000/booking/${id}`, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {

    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your booking has been deleted.',
    //                         'success'
    //                     );
    //                     const remaining = bookings.filter(booking => booking._id !== id)
    //                     setBookings(remaining)
    //                 }
    //             })


    //     }
    // }




    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/booking/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            );
                            const remaining = bookings.filter((booking) => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
                    .catch((error) => console.error('Error deleting booking:', error));
            }
        });
    };

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:4000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body:  JSON.stringify({ status: 'confirmed' })

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
            //update status
            const remaining = bookings.filter(booking => booking._id !== id )
            const updated = bookings.find(booking => booking._id === id );
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining] ;
            setBookings(newBookings);
            }
        })
    }

    // const handleBookingConfirm = (id) => {
    //     fetch(`http://localhost:4000/booking/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ status: 'confirm' }), // Ensure the status matches your expected value
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 // Update the status in state
    //                 const updatedBookings = bookings.map((booking) =>
    //                     booking._id === id ? { ...booking, status: 'confirm' } : booking
    //                 );
    //                 setBookings(updatedBookings);
    //                 console.log('Booking confirmed:', data);
    //             }
    //         })
    //         .catch((error) => console.error('Error confirming booking:', error));
    // };



    return (
        <div>
            <h2 className="font-semibold lg:text-2xl text-center">Your bookings: {bookings.length}</h2>
            <div className="">
                <table className="table">

                    <tbody>
                        {bookings.map((booking) => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
