import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

//model
import { CreationOrderFormValues } from "../../model/Order/model_form_Order";
import { GlobalOrderFillWithDatasDto, Global_Order } from "../../model/Order/model_order";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";

//api
import { CreateOrder } from "../../api/Order/request_order";

export const useCreationOrder = (
  setordercreating: React.Dispatch<React.SetStateAction<GlobalOrderFillWithDatasDto | null>>,
  setshowModalSetup: React.Dispatch<React.SetStateAction<boolean>>,
  handleCloseModal: () => void
): {
  handleCreationOrder: (order: CreationOrderFormValues) => void;
  isCreatingOrder: boolean;
} => {
  //store
  const { idUser } = useAuthStore();

  //mutation creation order
  const { mutateAsync: CreationOrderMutation, isPending: isCreatingOrder } = useMutation({
    mutationFn: (data: Global_Order) => {
      return CreateOrder(data);
    },
    onMutate: () => {},
    onSuccess: (response) => {
      if (response) {
        //at this step, i got a new order, so i save it in local (HeaderOrderListContainer.tsx)
        //for the momeent, waiting potential setup, or images
        const newOrder: GlobalOrderFillWithDatasDto = {
          globalOrder: response,
          failureGo: [],
          setupGo: [],
          imageGo: [],
          subOrderList: [],
        };
        setordercreating(newOrder);
        //next step, propose to the user to add or create some setups
        //i open the modal for the setup
        //i close the modal for the creation order
        setshowModalSetup(true);
        handleCloseModal();
      } else {
        toast.error("An error occured during the creation of the order, please try again later", {
          theme: "colored",
          style: {
            backgroundColor: "black",
            color: "white",
          },
        });
      }
    },
    onError: (error) => {
      toast.error("An error occured during the creation of the order, please try again later", {
        theme: "colored",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
      console.log("error", error);
    },
  });

  //i recieve from the form an object with the values of the form
  //i need to create a Global_Order object with the values of the form
  const handleCreationOrder = (order: CreationOrderFormValues) => {
    const globalOrder: Global_Order = {
      go_id: 0,
      go_user_id: idUser,
      go_openDate: order.creationdate.toISOString(),
      go_closeDate: null,
      go_asset: order.asset,
      go_quantity: +order.qtyAsset,
      go_entryPrice: +order.buyingPrice,
      go_exitPrice: null,
      go_percentageEngaged: +order.qtyPercent,
      go_amountEngaged: +order.qty$,
      go_percentageStopLoss: +order.sLPercentPF,
      go_status: true,
      go_result: 0,
      go_comment: order.description,
      go_direction: order.type,
    };
    CreationOrderMutation(globalOrder);
  };
  return { handleCreationOrder, isCreatingOrder };
};
