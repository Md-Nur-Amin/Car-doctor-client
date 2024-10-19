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
                                handleDelete={handleDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
