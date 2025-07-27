import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserList = () => {
  return (
    <div className="space-y-2">
      <div className="border rounded-md">
        <p className="py-2 px-3"> {"rohit" || "Unasssigned"}</p>
      </div>
      {[1, 1, 1, 1].map((item) => (
        <div
          key={item}
          className="py-2 group hover:bg-gray-600 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
        >
          <Avatar>
            <AvatarFallback>Z</AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Code with rohit</p>
            <p className="text-sm font-medium leading-none">@Codewithrohit</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
