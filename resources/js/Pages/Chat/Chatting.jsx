import SideBar from "@/Components/Chat/SideBar";
import ReactDOM from 'react-dom/client';
import ChatUserInfoHeader from "@/Components/Chat/ChatUserInfoHearder";
import ChatMessages from "@/Components/Chat/ChatMessages";
import ChatInput from "@/Components/Chat/ChatInput";
import { Head } from '@inertiajs/react';

export default function Chatting(props) {
    const { auth, errors, recentMessages, messages } = props;
    return (
        <div>
            <Head title="Chat" />
            <div className="messanger h-screen">
                <div className="lg:flex">
                    <div className="lg:basis-2/6 md:basis-full h-screen bg-zinc-900 relative">
                        <SideBar recentMessages={recentMessages} auth={auth}/>
                    </div>

                    <div className="lg:basis-4/6 lg:block hidden relative">
                        <div id="message">
                            <div className="flex">
                                <img className="object-cover fixed h-screen w-full" src={'/assets/Wallpaper/wallpaper2.jpg'} alt=""/>
                                <div className="fixed h-screen w-4/6 bg-zinc-700/90">
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

function ChatMessagesComponent(receiverId,messages,auth){
    // console.log(receiverId);
    const root = ReactDOM.createRoot(document.getElementById('message'));
    const element = (
        <>
            <ChatUserInfoHeader receiver={receiverId} />
            <div className="messanger mt-4">
                <div className="px-4 h-max overflow-auto">
                    <ChatMessages
                        messages={messages}
                        auth_id={auth?.id}
                        receiver={receiverId}
                    />
                </div>

                <ChatInput
                    receiver={receiverId}
                    auth={auth}
                    />
            </div>
        </>
    );
    root.render(element);
}
export {ChatMessagesComponent}
