import SellProductItem from "./SellProductItem";
import { appStyles } from "@/theme/appStyles";
import { ProductType } from "@/helper/types";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

type PropsType = {};
type ProductListType = { product: { productList: ProductType[] } };

export default function SellProductList(props: PropsType) {
  const {} = props;

  // redux store data
  const productList = useSelector(
    (state: ProductListType) => state.product.productList
  );

  return (
    <div className="relative h-[calc(100vh-210px)] max-sm:h-[calc(100vh-197px)] max-md:pb-10 max-sm:pb-8">
      <div className="h-full overflow-auto max-md:pb-4">
        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-2 sm:gap-3 gap-2 mx-2">
          {productList?.map((item, index) => {
            return (
              <SellProductItem
                data={item}
                key={`Product_Item_${item?.id}_${index}}`}
              />
            );
          })}
        </div>
        <Loader loading={true} style={appStyles.LOADER} />
      </div>
      <Loader
        loaderSize={60}
        loading={false}
        style={`${appStyles.PARENT_FULL_LOADER}`}
      />
    </div>
  );
}
