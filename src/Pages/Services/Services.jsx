import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <div className="my-20">
                <h3 className="font-bold text-xl text-center text-[#FF3811] "> Service </h3>
                <h3 className="text-center font-bold text-4xl my-5"> Our Service Area </h3>
                <p className="text-[#737373] text-base text-center lg:px-[320px]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
                    {/* <p> services: {services.length} </p> */}
                    {
                        services.slice(0, 3).map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        >
                        </ServiceCard>)
                    }
                </div>

                <div className=" flex justify-center py-5 ">
                    <Link to='/allservices' className="btn btn-outline btn-error "> More Services </Link>
                </div>

            </div>



        </div>
    );
};

export default Services;