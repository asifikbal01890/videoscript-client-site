import React from 'react';
import PriceCard from './PriceCard';

const Pricing = () => {

    const priceInfos = [
        {
            id: "01",
            title: "Personal",
            price: "59",
            describe: "Perfect for using in a personal website or a client project.",
            accuracy: "up to 85%",
            turnaround: "1/2 audio length",
            service: "Automatic",
            support: "3"
        },
        {
            id: "02",
            title: "Business",
            price: "199",
            describe: "Perfect for using in a Business website or a client project.",
            accuracy: "99% Guaranteed",
            turnaround: "24 hours",
            service: "Human-made",
            support: "6"
        },
        {
            id: "03",
            title: "Professional",
            price: "256",
            describe: "Perfect for using in a Professional website or a client project.",
            accuracy: "99% Guaranteed",
            turnaround: "48 hours",
            service: "Human translation",
            support: "12"
        },
    ]



    return (
        <div className='ml-12'>
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
            <section class="bg-white md:pt-20 lg:pt-[120px] md:pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
                <div class="container">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <h2 class="font-[Oswald] text-4xl font-semibold mb-4" >
                                    Our Pricing Plan
                                </h2>
                                <p class="">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center -mx-4">
                        {
                            priceInfos.map(info => <PriceCard
                                key={info.id}
                                info={info}
                            ></PriceCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;