import { Check } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/Store";
import {
  getUserSubscription,
  upgradeSubscription,
} from "../../Redux/Subscription/Action";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscription } = useSelector((store) => store);
  const queryParams = new URLSearchParams(location.search);

  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  useEffect(() => {
    dispatch(upgradeSubscription({ planType }));
    dispatch(getUserSubscription());
  }, []);
  return (
    <div className="flex justify-center">
      <Card className="mt-20 space-y-5 flex-col items-center">
        <div className="flex items-center gap-4">
          <Check className="h-9 w-9 text-green-500" />
          <p className="text-xl">Plan Upgraded successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">
            Start Date: {subscription.userSubscription?.subscriptionStartDate}
          </p>
          <p className="text-red-500">
            End Date: {subscription.userSubscription?.getSubscriptionEndDate}
          </p>
          <p>Plan Type: {subscription.userSubscription?.planType}</p>
        </div>
        <Button onClick={() => navigate("/")}>Go to home</Button>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
