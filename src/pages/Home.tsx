//Page Home
//display the balance of the user / total orders / Exposition
//display the chart of the balance's evolution of the user
import React from "react";

//store
import { useBalanceStore } from "@/store/useBalanceStore";

//hook
import { useGetBalance } from "@/hook/Balance/useGetBalance";

const Home = () => {
  const { balance, listIterationsBalance, PrctExposition, totalOrders } = useBalanceStore();

  //if the datas are loaded (or refresh page), the balance is calculated
  const {} = useGetBalance();

  return (
    <div
      style={{
        color: "white",
      }}
    >
      Home sd fsdfsdf sdf sdf sdfdsfsdf df
      {balance}
    </div>
  );
};

export default Home;
