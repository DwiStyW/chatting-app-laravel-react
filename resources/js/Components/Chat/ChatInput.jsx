import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import axios from 'axios';
import { ChatMessagesComponent } from '@/Pages/Chat/Chatting';


export default function ChatInput({receiver,auth}){
    // console.log(auth)
    const { data, setData, post, processing, errors, reset } = useForm({
        message: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        const messageVal=document.getElementById('message_val').value;
        axios.post(`/chat/store/${receiver.user_id}`, {
            receiver_id: receiver.user_id,
            message: messageVal,
        })
        .then((res) => {
            const messages = res.data;
            ChatMessagesComponent(receiver,messages,auth)
        });
        reset("message");
    };

    return (
        <div className="fixed bottom-0 w-full bg-white pl-4">
            <form onSubmit={submit} method='post'>
                <TextInput
                    className="h-16 w-full overflow-y-auto bg-white pt-3 font-light border-0 hover:border-0 focus:border-0 focus:ring-0 !shadow-none focus:!outline-none"
                    placeholder="Write a message"
                    name="message"
                    id="message_val"
                    value={data.message}
                    onChange={onHandleChange}
                ></TextInput>
            </form>
        </div>
    );
}
