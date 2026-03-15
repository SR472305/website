import { Code, Smartphone, Cloud } from "lucide-react";

export default function Services() {
    return (
        <section className="bg-[#08142c] text-white py-20">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex flex-col items-center my-16">

                    {/* First Line */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Our Services
                    </h2>

                    {/* Second Line */}
                    <div className="flex items-center gap-6 w-full max-w-xl">

                        <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                        <h3 className="text-xl font-semibold text-white tracking-wide">
                            What We Offer
                        </h3>

                        <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

                    </div>

                </div>

                {/* Services Cards */}

                <div className="grid gap-8 md:grid-cols-3">

                    {/* Card 1 */}

                    {/* Card 1 */}
                    <div className="bg-[#0f2147] p-8 rounded-xl hover:scale-105 hover:shadow-blue-500/20 transition duration-300 shadow-lg">

                        <div className="flex items-center gap-3 mb-4">
                            <Code size={40} className="text-blue-400" />
                            <h3 className="text-xl font-semibold">
                                Web Development
                            </h3>
                        </div>

                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-4"></div>

                        <p className="text-gray-400">
                            Building responsive and dynamic websites.
                        </p>

                    </div>


                    {/* Card 2 */}
                    <div className="bg-[#0f2147] p-8 rounded-xl hover:scale-105 hover:shadow-blue-500/20 transition duration-300 shadow-lg">

                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone size={40} className="text-blue-400" />
                            <h3 className="text-xl font-semibold">
                                App Development
                            </h3>
                        </div>

                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-4"></div>

                        <p className="text-gray-400">
                            Creating powerful mobile applications.
                        </p>

                    </div>


                    {/* Card 3 */}
                    <div className="bg-[#0f2147] p-8 rounded-xl hover:scale-105 hover:shadow-blue-500/20 transition duration-300 shadow-lg">

                        <div className="flex items-center gap-3 mb-4">
                            <Cloud size={40} className="text-blue-400" />
                            <h3 className="text-xl font-semibold">
                                Cloud Solutions
                            </h3>
                        </div>

                        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 mb-4"></div>

                        <p className="text-gray-400">
                            Scalable and secure cloud services.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}