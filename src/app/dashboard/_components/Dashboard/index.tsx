import { DashboardContent } from "./DashboardContent";
import DashboardExpiredProducts from "./DashboardExpiredProducts";
import DashboardHeader from "./DashboardHeader";
import DashboardIncome from "./DashboardIncome";
import DashboardLoss from "./DashboardLoss";
import DashboardProducts from "./DashboardProducts";
import DashboardStockDetails from "./DashboardStockDetails";
import DashboardRoot from "./DashboardRoot";
import DashboardDescriptionsAndTags from "./DashboardDescriptionAndTags";
import DashboardQuantity from "./DashboardQuantity";

export const Dashboard = {
  Root: DashboardRoot,
  Header: DashboardHeader,
  Content: DashboardContent,
  Details: DashboardStockDetails,
  Income: DashboardIncome,
  Loss: DashboardLoss,
  Quantity: DashboardQuantity,
  DetailsAndTags: DashboardDescriptionsAndTags,
  Products: DashboardProducts,
  ExpiredProducts: DashboardExpiredProducts,
}

