import Link from 'next/link';
import Image from 'next/image'; // Import Image for optimization
import React from 'react';
import "./Projects.css";

export default function ProjectsPage() {
    return (
        <div>
            <section className="container mx-auto my-12" id="Projects">
                <h1 className="text-5xl font-bold text-center mb-12">Projects</h1>
                <div className="flex flex-wrap gap-10 my-5 w-full justify-center">
                    {/* cards */}
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/resume-builder.png" className="rounded-t-lg w-full h-44 object-cover" alt="Resume Builder" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">Resume Builder</h5>
                            <p className="text-sm my-2">
                                &quot;Generate a professional-looking resume with my Resume Builder web app, featuring comprehensive templates and intuitive features.&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://resume-builder--inky.vercel.app" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/Resume_builder" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/news-app.png" className="rounded-t-lg w-full h-44 object-cover" alt="News App" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">News App</h5>
                            <p className="text-sm my-2">
                                &quot;Stay informed with my intuitive news progressive web app, delivering curated updates right at your fingertips.&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://news-app-flame-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/News-App" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/pizza chatbot.jpg" className="rounded-t-lg w-full h-44 object-cover" alt="Pizza Chatbot" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">Pizza Chatbot</h5>
                            <p className="text-sm my-2">
                                &quot;Experience the ultimate pizza ordering convenience with our Dialogflow-powered chatbot, making every craving just a chat away!&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://pizza-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/PIZZA_CHATBOT.git" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/calculator.png" className="rounded-t-lg w-full h-44 object-cover" alt="Calculator" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">Calculator</h5>
                            <p className="text-sm my-2">
                                &quot;Empower your daily calculations with my progressive web app calculator, designed for efficiency and accessibility.&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://calculator-bice-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/Calculator" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/votehub.png" className="rounded-t-lg w-full h-44 object-cover" alt="Vote Hub" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">Vote Hub</h5>
                            <p className="text-sm my-2">
                                &quot;Elevate your voting experience with my Vote Hub web app, featuring intuitive features and a seamless voting experience.&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://vote-hub-6iqt.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/Vote_Hub" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                    <div className="bg-[#212529] text-white shadow-lg rounded-lg w-96">
                        <Image src="/Images/weather app.png" className="rounded-t-lg w-full h-44 object-cover" alt="Weather App" width={384} height={176} />
                        <div className="p-6">
                            <h5 className="text-2xl font-bold">Weather App</h5>
                            <p className="text-sm my-2">
                                &quot;Stay updated with real-time weather information using my sleek and user-friendly Weather App.&quot;
                            </p>
                            <div className="mt-4">
                                <div className='mb-2'>
                                    <Link href="https://weather-app-beta-dun.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-blue-800 text-white font-semibold py-0 pb-1 w-full rounded hover:bg-blue-700 transition duration-200 border-b-4 border-blue-700">
                                            View
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://github.com/ALIRAZA4278/Weather-App" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-gray-900 text-white font-semibold py-1 w-full rounded hover:bg-gray-800 transition duration-200 border-b-4 border-gray-700">
                                            Source Code
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="px-6 pb-4">
                            <small className="text-gray-400">Email: af912923@gmail.com</small>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
