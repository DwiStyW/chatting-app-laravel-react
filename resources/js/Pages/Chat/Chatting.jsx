import SideBar from "@/Components/Chat/SideBar";
// import ChatUserInfo from "@/Components/Chat/ChatUserInfo";
import { useEffect } from "react";
import { Head } from '@inertiajs/react';

export default function Chatting(props) {
    const { auth, errors, recentMessages, messages } = props;
    return (
        <div>
            <Head title="Chat" />
            <div className="messanger h-screen ">
                <div className="lg:flex">
                    <div className="lg:basis-2/6 md:basis-full h-screen bg-zinc-900">
                        <SideBar recentMessages={recentMessages} auth={auth}/>
                    </div>

                    <div className="lg:basis-4/6 lg:block hidden relative">
                        <div id="message">
                            <div className="flex">
                                <img className="object-cover h-screen w-full" src={'/assets/Wallpaper/wallpaper2.jpg'} alt=""/>
                                <div className="absolute h-screen w-full bg-zinc-700/90">
                                    <div className="flex items-center h-screen">
                                        <div className="w-full">
                                            <div className="flex justify-center ">
                                                <img src={'/assets/Logo/logo.png'} alt=""/>
                                            </div>
                                            <div className="flex justify-center mt-2">
                                                <h1 className="font-bold text-4xl text-gray-500">My Chatting App</h1>
                                            </div>
                                            <div className="flex justify-center mt-3">
                                                <p className="text-2xl text-gray-500">
                                                    Please select a User to start
                                                    chatting...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
