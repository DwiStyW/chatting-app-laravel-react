import InfoSideBar from "./InfoSideBar";
import Search from '@/Components/Search';
import * as moment from "moment/moment";
import { Link, useForm  } from "@inertiajs/react";
import { useState, useEffect } from 'react';
import MessagesComponent from "./MessagesComponent";


export default function SideBar({ recentMessages,auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        search: '',
    });
    const user=auth.user;
    const [receiverId,setReceiverid]=useState('undefined');
    MessagesComponent(receiverId,user);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
        localStorage.setItem("message",event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        localStorage.removeItem("message");
        post(route("chat.store", receiver?.id));
        reset("message");
    };

    function truncate(input) {
        if (input.length > 25) {
            return input.substring(0, 25) + '...';
        }
        return input;
    };

    return (
        <div className="max-h-screen">
            <div className="fixed top-0 left-0 right-0 lg:w-2/6 md:w-full">
                <InfoSideBar auth={auth}/>
                <div className="search-box h-10 text-slate-900">
                    <div className="flex justify-between p-2">
                        <div className="bg-zinc-700 border-0 focus:border-0 focus:ring-0 rounded-md shadow-sm w-full m-2">
                            <form onSubmit={submit} className="flex justify-center items-center">
                                <div className="p-3">
                                    <i className="fa fa-search text-slate-400"></i>
                                </div>

                                <Search
                                    id="search"
                                    name="search"
                                    value={data.search}
                                    placeholder="search or start new chat"
                                    className="w-full bg-zinc-700 text-slate-400"
                                    autoComplete="search"
                                    isFocused={true}
                                    onChange={onHandleChange}
                                    required
                                />
                            </form>
                        </div>
                        <div className="flex justify-center items-center">
                            <i className="fa-solid fa-filter text-slate-400"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-list pt-36 m-2">
                {recentMessages.map((user, index) => (
                    <button
                        // href={`/chat/${user.user_id}`}
                        onClick={()=>setReceiverid(user)}
                        key={index}
                        className="flex px-5 py-3 relative w-full transition hover:cursor-pointer hover:bg-zinc-700 border-b border-zinc-700"
                    >
                        <div>

                        </div>
                        <div className="pr-4">
                            {user?.avatar != null ? (
                                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                                    width="50"/>
                            ) : (
                                <img src={'/assets/Avatar/user-circle.png'} className="bg-slate-400 rounded-full"
                                    width="50"/>
                            )}
                        </div>

                        <div className="text-left">
                            <h3 className="text-md text-violet-500">
                                {user.name.length > 0 ? user.name : "N/A"}
                            </h3>
                            <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                                {truncate(user.message)}
                            </p>
                        </div>

                        <div className="absolute right-0 bottom-0 mb-4 text-right">
                            <p className="h-5 overflow-hidden text-sm font-light text-gray-400">
                                {moment(user.created_at).fromNow()}
                            </p>
                        </div>

                    </button>
                ))}
            </div>
        </div>
    );
}
