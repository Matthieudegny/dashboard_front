import { FailureGoType, SetupGoType, SetupSoType, FailureSoType } from "../Categories/model_catgories";
import { FieldError } from "react-hook-form";

//list orders fill with datas
export interface GlobalOrderFillWithDatasDto {
  globalOrder: Global_Order;
  failureGo: Array<FailureGoType>;
  setupGo: Array<SetupGoType>;
  imageGo: Array<ImageGo>;
  subOrderList: Array<SubOrderFillWithDatasDto>;
}

export interface SubOrderFillWithDatasDto {
  subOrder: Sub_Order;
  failureSo: Array<FailureSoType>;
  setupSo: Array<SetupSoType>;
  imageSo: Array<ImageSo>;
}

//orders
export interface Global_Order {
  go_id: number;
  go_user_id: number;
  go_openDate: string;
  go_closeDate: string;
  go_asset: string;
  go_quantity: number;
  go_entryPrice: number;
  go_exitPrice: number;
  go_percentageEngaged: number;
  go_amountEngaged: number;
  go_percentageStopLoss: number;
  go_status: boolean;
  go_result: number;
  go_comment: string;
  go_direction: string;
}

export interface Sub_Order {
  so_id: number;
  so_go_id: number;
  so_openDate: string;
  so_closeDate: string;
  so_quantity: number;
  so_entryPrice: number;
  so_exitPrice: number;
  so_status: boolean;
  so_result: number;
  so_comment: string;
  so_amountEngaged: number;
}

//images
export interface ImageGo {
  image_go_id: number;
  image_go_go_id: number;
  image_go_title: string;
  image_go_content: string;
}

export interface ImageSo {
  image_so_id: number;
  image_so_so_id: number;
  image_so_title: string;
  image_so_content: string;
}

export interface ImageFrontType {
  id: number;
  title: string;
  image: string;
  description: string;
}

//text editor
export interface TextEditorType {
  contentState: string;
  setContentState?: React.Dispatch<React.SetStateAction<string>> | ((newValue: string) => void);
  isEditable: boolean;
  size: "short" | "long";
  title: string;
  showTitle: boolean;
  statutIsError: boolean | FieldError | undefined;
}
