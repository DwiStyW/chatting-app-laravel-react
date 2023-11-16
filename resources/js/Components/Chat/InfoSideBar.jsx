import { Link } from "@inertiajs/react";

export default function InfoSideBar({auth }) {
    console.log(auth.user?.avatar);
    return (
        <div className="flex justify-between bg-zinc-700">
            <div className="p-4">
                {auth.user?.avatar != null ? (
                    <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                        width="50"/>
                ) : (
                    <>
                        <i className="fa-solid fa-circle-user fa-2xl text-slate-400"></i>
                    </>
                )}
            </div>
            <div className="p-4 flex">
                <div className="flex justify-center items-center text-slate-400 mr-7">
                    <button className="relative">
                        <i className="fa fa-message"></i>
                        <i className="fa fa-plus absolute -top-2 text-sm"></i>
                    </button>
                </div>
                <div>
                    <i className="fa-solid fa-ellipsis-vertical fa-xl text-slate-400"></i>
                </div>
            </div>
        </div>
    );
}
