import React from "react";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";
const SubscriptionCard = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#c49e9e] bg-opacity-20 shadow-[#a6abde] shadow-2xl card p-5 space-y-5 w-[18rem]">
      <p>{data.planName}</p>
      <p>
        <span className="text-xl font-semibold">${data.price}</span>
        <span>${data.planType}</span>
      </p>
      {data.planType == "ANNUALY" && <p className="text-green-500">30% off</p>}
      <Button className="w-full">{data.buttonName}</Button>
      <div>
        {data.features.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCheckIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
