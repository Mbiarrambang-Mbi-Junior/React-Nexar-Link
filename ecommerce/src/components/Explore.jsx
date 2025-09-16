import React from 'react'
import '../styles/explore.css'
import {
    BsHeadset, BsPerson, BsCarFront, BsBox, BsTools,
    BsHouse, BsGift, BsLightbulb, BsPlug, BsBook,
} from 'react-icons/bs'


function Explore() {
    return (
        <section className="explore-section">
            <span className="explore-heading text-center text-30 font-bold text-teal-800 m-10">
                Explore Our Products
            </span>
            <div className="explore-contianer flex flex-col justify-between items-center">
                <div className="explore-content flex ">
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500">
                        <BsHeadset />
                        <div className="icon-text">
                            <h3>Headphones</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500">
                        <BsPerson />
                        <div className="icon-text">
                            <h3>
                                customer service
                            </h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsCarFront />
                        <div className="icon-text">
                            <h3>
                                vehicles
                            </h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsBox />
                        <div className="icon-text">
                            <h3>Packaging</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsTools />
                        <div className="icon-text">
                            <h3>Headphones</h3>
                        </div>
                    </div>
                </div>

                <div className="explore-content flex">
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsHouse />
                        <div className="icon-text">
                            <h3>Home apllaince</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsGift />
                        <div className="icon-text">
                            <h3>Gifts & crafts</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsLightbulb />
                        <div className="icon-text">
                            <h3>Light & Lighting</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsPlug />
                        <div className="icon-text">
                            <h3>Electrical equipment</h3>
                        </div>
                    </div>
                    <div className="expore-icon p-5 rounded-full  border-2 border-teal w-30 h-30 flex flex-col justify-center aligne-center m-5 text-center hover:border-orange-500 m-5">
                        <BsBook />
                        <div className="icon-text">
                            <h3>School & office supplies</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore