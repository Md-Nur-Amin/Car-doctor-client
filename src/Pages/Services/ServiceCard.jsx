import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    console.log(service);
    const {_id,title, img, price} = service

    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-x border p-5 ">
                <figure className="rounded-lg">
                    <img 
                    className="h-52 w-80 rounded-lg"
                    src={img} alt="Shoes" />
                    </figure>
                
                <div className="card-body">
                    <h2 className="card-title text-[#444444] font-bold text-2xl "> {title} </h2>

                    <p className="text-[#FF3811] font-semibold text-xl "> Price:  ${price} </p>

                    <Link to={`/checkout/${_id}`} className="card-actions justify-end">
                        <button className="text-[#FF3811] btn"> Book now <FaArrowRight />  </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;