"use client";

export default function Services() {
    const services = [
        "Architecture",
        "Interior Design",
        "Master Planning",
        "Design Consultation"
    ];

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="font-serif text-4xl mb-8">Expertise</h2>
                    <p className="font-sans text-gray-500 max-w-sm leading-relaxed">
                        Our practice spans multiple disciplines, allowing us to deliver holistic design solutions from the structural shell to the furniture details.
                    </p>
                </div>
                <div className="space-y-0 divide-y divide-gray-200">
                    {services.map((service, index) => (
                        <div key={index} className="py-8 group hover:pl-4 transition-all duration-300 cursor-default">
                            <h3 className="font-serif text-2xl md:text-3xl text-gray-800 group-hover:text-black">{service}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
