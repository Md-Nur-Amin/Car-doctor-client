import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Allservices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="my-5">
            <div className="my-10" >
                <h3 className="font-bold text-xl text-center text-[#FF3811] "> Service </h3>
                <h3 className="text-center font-bold text-4xl mt-5"> Our Service Area </h3>
                
            </div>

            <div className="mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
                    {/* <p> services: {services.length} </p> */}
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        >
                        </ServiceCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Allservices;