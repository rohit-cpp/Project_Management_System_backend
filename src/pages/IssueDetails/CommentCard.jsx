import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
const CommentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-left">
          <p>Code with zosh</p>
          <p>how much work is pending ??</p>
        </div>
        <div>
          <Button className="rounded-full" variant="ghost" size="icon">
            <TrashIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
