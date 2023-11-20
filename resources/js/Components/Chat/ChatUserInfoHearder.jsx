import { Head } from '@inertiajs/react';

export default function ChatUserInfoHeader(receiver){
    return (
        <div className="fixed top-0 w-full user-info-header bg-zinc-700 px-5 py-3">
            <div className="flex justify-between">
                <div className="flex items-center">
                    {receiver.receiver?.avatar != null ? (
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                            width="35"
                        />
                    ) : (
                        <img src={'/assets/Avatar/user-circle.png'} className="bg-slate-400 rounded-full"
                                    width="35"/>
                    )}

                    <h3 className="text-md pl-4 text-gray-400">
                        {receiver.receiver?.name}
                    </h3>
                </div>
                <div>
                    <i className="fa fa-message text-violet-300"></i>
                    <i className="fa fa-video ml-3 text-gray-200"></i>
                    <i className="fa fa-phone ml-3 text-gray-200"></i>
                </div>
            </div>
        </div>
    )
}
