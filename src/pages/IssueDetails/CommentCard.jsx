import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../Redux/Comment/Action";
const CommentCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(item.id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{item.user.fullName[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-left">
          <p>{item.user.fullName}</p>
          <p>{item.content}</p>
        </div>
        <div>
          <Button
            onClick={handleDelete}
            className="rounded-full"
            variant="ghost"
            size="icon"
          >
            <TrashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
