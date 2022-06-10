/* eslint-disable @next/next/no-img-element */


const About = () => {
  return (
    <div id="about" className='max-w-xl  flex flex-col mt-4 p-5 pb-0 mx-auto justify-center items-center  text-gray-300'>
        <h1 className='text-2xl font-bold pb-8'>About Me</h1>
        <div className="mt-5 ">
            <div className="flex flex-col   md:flex-row gap-4 ">
                <img src="https://i.ibb.co/p17bsGC/DSC-3662.jpg" alt="about" className="w-full h-full md:w-40  object-cover border-2 border-orange-500 rounded" />
                <div className="my-2">
                <p className="text-gray-400 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Pariatur, itaque quod? 
                </p>
                <br />
                <p className="text-gray-400 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Pariatur, itaque quod? Impedit voluptatum
                </p>
                </div>

            </div>
            <div className="flex flex-col md:flex-row mt-5 gap-2">
                <div className="shadow-lg bg-gray-800 p-10 rounded text-center w-full md:w-1/3">
                    <h1 className="text-2xl font-bold ">Students</h1>
                    <p className="text-gray-400 text-2xl font-semibold ">+5 </p>
                </div>
                <div className="shadow-lg bg-gray-800 p-10  rounded text-center w-full md:w-1/3">
                    <h1 className="text-2xl font-bold">Experience</h1>
                    <p className="text-gray-400 text-2xl font-semibold ">+2 </p>
                </div>
                
                <div className="shadow-lg bg-gray-800 p-10  rounded text-center w-full md:w-1/3">
                    <h1 className="text-2xl font-bold">Completed</h1>
                    <p className="text-gray-400 text-2xl font-semibold ">+12 </p>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default About