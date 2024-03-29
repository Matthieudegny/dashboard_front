import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//request
import { GetMainDatasByIdUser } from "../../api/Login/request_Login";

//store
import { useAuthStore } from "../../store/Login/useAuthStore";
import { useOrdersStore } from "../../store/MainDatas/useOrdersStore";
import { useCategoriesStore } from "../../store/MainDatas/useCategoriesStore";

//model
import { ResponseGetMainDatasByIdUserType } from "../../model/Login/model_request_login";

export const useGetDatas = (): {
  datasAppIsFetching: boolean;
} => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { idUser } = useAuthStore();
  const { setListGlobalOrders } = useOrdersStore();
  const { setListSetupGo, setListSetupSo, setListFailureGo, setListFailureSo } = useCategoriesStore();

  //GET
  const {
    data: datasApp,
    isError: datasAppIsError,
    isFetching: datasAppIsFetching,
  } = useQuery({
    queryKey: ["GetDatasByIdUser", idUser],
    queryFn: () => GetMainDatasByIdUser(idUser),
    enabled: !!idUser && idUser !== 0 && !!token,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (datasAppIsError) {
      console.log("error GetDatasByIdUser file useGetDatas");
      toast.error("An error occured during the loading of the datas, please try again later", {
        theme: "colored",
        style: {
          backgroundColor: "black",
          color: "white",
        },
      });
    }
    if (datasApp) {
      const response: ResponseGetMainDatasByIdUserType = datasApp;
      console.log("success", response);
      if (response) {
        if (response?.globalOrderList?.length > 0) {
          setListGlobalOrders(response.globalOrderList);
        }
        if (response?.setupGoList?.length > 0) {
          setListSetupGo(response.setupGoList);
        }
        if (response?.setupSoList?.length > 0) {
          setListSetupSo(response.setupSoList);
        }
        if (response?.failureGoList?.length > 0) {
          setListFailureGo(response.failureGoList);
        }
        if (response?.failureSoList?.length > 0) {
          setListFailureSo(response.failureSoList);
        }
        navigate("/Home");
      }
    }
  }, [datasApp, datasAppIsError]);

  return { datasAppIsFetching };
};
