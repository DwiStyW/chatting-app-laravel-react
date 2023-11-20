<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use App\Models\User;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function __construct(private ChatRepository $chat){
        $this->chat=$chat;
    }

    /**
     * Chat view.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request, ?int $receiverId = null)
    {
        // dump($request->user());
        // dump($receiverId);
        $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int) $request->user()->id, (int) $receiverId);
        // dump($request->user()->id);
        // dd($this->chat->getRecentUsersWithMessage($request->user()->id));
        return Inertia::render('Chat/Chatting', [
            'messages' => $messages,
            'recentMessages' => $this->chat->getRecentUsersWithMessage($request->user()->id),
            'receiver' => User::find($receiverId),
        ]);
    }

    public function messages(Request $request,$receiverId){
         $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int) $request->user()->id, (int) $receiverId);
         return json_decode($messages);
    }
    /**
     * Chat store
     *
     * @return \Inertia\Response
     */
    public function store(Request $request, ?int $receiverId = null)
    {
        // $request->validate([
        //     'message' => 'required|string',
        // ]);

        if (empty($receiverId)) {
            return;
        }

        try {
            $message = $this->chat->sendMessage([
                'sender_id' => (int) $request->user()->id,
                'receiver_id' => $receiverId,
                'message' => $request->message,
                'data' => '',
            ]);

            event(new MessageSent($message));

            $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int) $request->user()->id, (int) $receiverId);
            return json_decode($messages);
        } catch (\Throwable $th) {
            $messages = empty($receiverId) ? [] : $this->chat->getUserMessages((int) $request->user()->id, (int) $receiverId);
            return $th;
        }
    }
}