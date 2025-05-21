import TestimonialCard from "../TestimonyCard";
import React from "react";

function Testimony() {
    const testimonials = [
        {
            name: 'Pallavi Sharma',
            content: '“Surakshit gave me the confidence to travel alone again. The instant SOS and tracking features are truly lifesaving.”'
        },
        {
            name: 'Muskan Gupta',
            content: '“I feel more secure knowing someone can reach me quickly in case of an emergency. Surakshit is a must-have for every woman.”'
        },
        {
            name: 'Shristi Mishra',
            content: '“The app is incredibly easy to use, and the Safe OTP feature ensures I’m never alone in unfamiliar situations.”'
        },
        {
            name: 'Riya Tiwari',
            content: '“Thanks to Surakshit, I know I have support wherever I go. It’s like having a guardian in your pocket.”'
        }
    ];

    return (
        <section className='w-full rounded-xl bg-gradient-to-r from-violet-200 to-pink-200 mb-8'>
            <div className='w-full relative py-12'>
                <div className='w-full p-6 z-10 relative'>
                    <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>What Our Women Users Say</h1>
                    <div className='flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:items-stretch'>
                        {testimonials.map((testimonial, index) => (
                            <React.Fragment key={index}>
                                {(index === 0 || window.innerWidth >= 768) && (
                                    <TestimonialCard
                                        name={testimonial.name}
                                        content={testimonial.content}
                                    />
                                    
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <img 
                    className='w-full h-full object-cover absolute top-0 left-0 opacity-0 md:opacity-10 transition-opacity duration-300' 
                    src="/background.svg" 
                    alt="Background pattern" 
                />
            </div>
        </section>
    );
}

export default Testimony;