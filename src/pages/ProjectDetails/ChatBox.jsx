import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PaperclipIcon, TicketCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = (e) => {
    console.log("message", message);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-3 font-semibold">Chat Box</h1>

        <ScrollArea className="h-[32rem] w-full p-5 flex flex-col gap-3">
          {[1, 1, 1, 1].map((item, index) => {
            const isSender = (index + 5) % 2 === 0;

            return (
              <div
                key={index}
                className={`flex gap-2 mb-2 ${
                  isSender ? "justify-start" : "justify-end"
                }`}
              >
                {isSender && (
                  <Avatar>
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`space-y-2 py-2 px-5 border rounded-e-xl ${
                    isSender
                      ? "rounded-ss-2xl bg-muted"
                      : "rounded-se-2xl bg-primary text-white"
                  }`}
                >
                  <p className="font-medium text-sm">
                    {isSender ? "Rohit" : "You"}
                  </p>
                  <p className="text-sm">
                    {isSender ? "How are you?" : "I'm good!"}
                  </p>
                </div>

                {!isSender && (
                  <Avatar>
                    <AvatarFallback>Y</AvatarFallback>
                  </Avatar>
                )}
              </div>
            );
          })}
        </ScrollArea>
        <div className="realtive p-0">
          <Input
            placeholder="type message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            onClick={handleSendMessage}
            className="rounded-full text-black"
            size="icon"
            variant="ghost"
          >
            <TicketCheck />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
