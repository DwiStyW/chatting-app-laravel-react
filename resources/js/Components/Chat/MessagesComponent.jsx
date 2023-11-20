import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import React,{ useState, useEffect } from 'react';
import { ChatMessagesComponent } from '@/Pages/Chat/Chatting';
import axios from 'axios';

export default function MessagesComponent(receiverId,auth){
    const [data, setData] = useState(null);
    useEffect(() => {
        const userID=receiverId.user_id;
        if(userID!=undefined){
            axios.get(`chat/${userID}`)
            .then(res => {
                const messages = res.data;
                ChatMessagesComponent(receiverId,messages,auth)
                console.log(messages);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },[receiverId]);
}
