import React from 'react'

const page = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("/images/background.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <section className="min-h-screen from-blue-50 to-white flex items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                    {/* Image above heading */}
                    <img
                        src="/images/superteacher.png"
                        alt="AI Grading Illustration"
                        className="mx-auto w-[500px] h-[500px] rounded-xl"
                    />
                    <h1 className="font-manrope mt-[-80px] text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                        India’s first AI grading platform <br />
                        for teachers.
                    </h1>
                    <div className="mt-8 flex flex-row justify-center items-center gap-4">
                        <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition flex items-center space-x-2">
                            <img
                                src="/images/join.png"
                                alt="AI Grading Illustration"
                                className="w-6 h-6"  // Adjust size of the image to be smaller and fit nicely
                            />
                            <a className='font-Manrope-Medium' href="https://tally.so/r/w4ELKX">Join waitlist</a>
                        </button>
                    </div>

                </div>
            </section>


            <section className="px-4 md:px-20 text-center">
                <h2 className="text-6xl mb-4 font-Manrope-Bold">How it works</h2>

                <h3 className="text-xl text-gray-600 mb-1 font-Manrope-SemiBold">A week of grading done in minutes</h3>
                <div className="flex flex-col items-center my-20">
                    {/* Mobile Image */}
                    <img
                        src="/images/FlowchartMobile.png"
                        alt="Vision Teacher Illustration for Mobile"
                        className="block md:hidden object-cover w-full h-full rounded-xl"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/Flowchart.png"
                        alt="Vision Teacher Illustration for Desktop"
                        className="hidden md:block object-cover w-full h-full rounded-xl"
                    />
                </div>


            </section>
            <section className="mb-20 px-6">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-5xl sm:text-6xl text-gray-800 mb-6 font-Manrope-Bold">
                            Mission
                        </h2>

                        <p className="text-2xl text-gray-700 mb-6 font-Manrope-SemiBold">
                            Our Mission is to give every teacher their time back, so they can focus on what they love-teaching
                        </p>
                    </div>


                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/images/mission.png"
                            alt="Vision Teacher Illustration"
                            className="w-[320px] md:w-[420px] rounded-xl"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 sm:px-8 lg:px-24">
                {/* Main Text Content */}
                <div className="text-center max-w-4xl mx-auto space-y-4">
                    <h1 className="text-5xl sm:text-6xl font-Manrope-Bold text-gray-800 leading-tight">
                        Powered by Vara, your trusted teaching intelligence
                    </h1>
                </div>

                {/* Separate Div for Paragraph */}
                <div className="text-center max-w-lg mx-auto">
                    <h3 className="text-lg text-gray-600 font-Manrope-SemiBold">
                        Your AI companion understands curriculum, grading logic, and personal feedback patterns—delivering fast, accurate results while staying true to your teaching style.
                    </h3>
                </div>
                {/* <div className="flex justify-center items-center mt-20">
                    <img
                        src="/images/brain.png"
                        alt="Example Image"
                        className="w-[600px] md:w-[1000px] lg:w-[1200px] h-auto"
                    />
                </div>
 */}

                <div className="flex flex-col lg:flex-row py-10 px-4 items-center justify-center">
                    {/* Arrows Image positioned centrally */}
                    <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
                        <img
                            src="/images/comArrow.png"
                            alt="Example Image"
                            className="w-[400px] h-auto rounded-lg"
                        />
                    </div>

                    {/* Right section */}
                    <div className="flex flex-col items-center bg-gray-100 border border-gray-800 rounded-xl p-5 px-6 shadow-md relative max-w-lg">
                        <div className="mb-4">
                            <img
                                src="/images/Varabrain.png"
                                alt="Example Image"
                                className="w-[180px] h-auto rounded-lg"
                            />
                        </div>

                        <div className="bg-black h-[2px] w-[300px] mb-3"></div>

                        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                            <div className="flex-1 space-y-3 flex flex-col items-center">
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-lg font-Manrope-Medium text-gray-800">Curriculum context</h2>
                                </div>
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-lg font-Manrope-Medium text-gray-800">Tone matching</h2>
                                </div>
                            </div>
                            <div className="flex-1 space-y-3 flex flex-col items-center">
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-lg font-Manrope-Medium text-gray-800">Grading logic</h2>
                                </div>
                                <div className="bg-white p-2 rounded-xl shadow border border-black w-[120px] text-center">
                                    <h2 className="text-lg font-Manrope-Medium text-gray-800">Answer evaluation</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            {/* Our Approach */}
            <section className="py-16 px-4 sm:px-8 lg:px-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl sm:text-6xl font-Manrope-Bold text-black mb-20">
                        Our Approach
                    </h2>

                    {/* Flex container to align items in a row */}
                    <div className="flex justify-between gap-8">
                        {/* First Div */}
                        <div className="w-1/3 rounded-lg flex flex-col items-center text-center">
                            <img src="/images/Approach1.png"
                                alt="Approach Image"
                                className="w-full h-auto mb-4 rounded-md" />
                            <h3 className="text-xl font-Manrope-SemiBold mb-2">Built for simplicity</h3>
                            <p className="max-w-[300px] mx-auto">
                                Scan, grade, done—no training needed.
                            </p>
                        </div>

                        {/* Second Div */}
                        <div className="w-1/3 rounded-lg flex flex-col items-center text-center">
                            <img src="/images/Approach2.png"
                                alt="Approach Image"
                                className="w-full h-auto mb-4 rounded-md" />
                            <h3 className="text-xl font-Manrope-SemiBold mb-2">Designed for teachers</h3>
                            <p className="max-w-[200px] mx-auto">
                                Every tap saves time, every
                                screen feels familiar
                            </p>
                        </div>
                        {/* Third Div */}
                        <div className="w-1/3 rounded-lg flex flex-col items-center text-center">
                            <img
                                src="/images/Approach3.png"
                                alt="Approach Image"
                                className="w-full h-auto mb-4 rounded-md"
                            />
                            <div className="max-w-sm mx-auto">
                                <h3 className="text-xl font-Manrope-SemiBold mb-2">Brings joy back to teaching</h3>
                                <p className="max-w-[270px] mx-auto">
                                    Less grunt work, more connection with students.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 py-16">
                {/* Left Text Section */}
                <div className="text-4xl md:text-8xl mx-20 font-black italic leading-tight text-black space-y-4">
                    <p>Let AI do</p>
                    <p>the grading.</p>
                    <p>You do</p>
                    <p>the teaching.</p>
                </div>

                {/* Divider and Social Icons */}
                <div className="flex flex-row items-center mt-10 md:mt-0">
                    <div className="w-px h-30 bg-black mb-4 mr-10"></div>
                    <div className="flex space-x-0.5">
                        <a href="#" aria-label="Instagram">
                            <img src="/images/instagram.svg" alt="Instagram" className="h-10 w-10" />
                        </a>
                        <a href="#" aria-label="X">
                            <img src="/images/twitter.svg" alt="X" className="h-10 w-10" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src="/images/linkedin.svg" alt="LinkedIn" className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
