import aboutImg from "../../assets/images/about_us/parts.jpg"
import aboutImg2 from "../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={aboutImg2} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={aboutImg} className="w-1/2 rounded-lg shadow-2xl absolute right-24 top-1/2 border-8 border-white" />
                    </div>

                    <div className="lg:w-1/2 space-y-5 p-10">
                        <h1 className="text-[#FF3811] mb-5 font-bold text-xl">About Us</h1>
                        <h1 className="text-4xl text-[#151515] font-bold">We are qualified & of experience in this field</h1>

                        <p className="my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                        <p className="mb-4">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>


                        <button className="btn bg-[#FF3811] text-white ">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;