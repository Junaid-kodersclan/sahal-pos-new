import ProductListItem from "./ProductListItem";
import { appStyles } from "@/theme/appStyles";
import { ProductType } from "@/helper/types";
import { useSelector } from "react-redux";

type PropsType = {};
type ProductListType = { product: { productList: ProductType[] } };

export default function ProductList(props: PropsType) {
  const {} = props;

  // redux store data
  const productList = useSelector(
    (state: ProductListType) => state.product.productList
  );

  return (
    <div className="relative mt-3 h-[calc(100vh-150px)] max-lg:h-[calc(100vh-194px)] max-sm:h-[calc(100vh-173px)]">
      <div className="w-full h-full overflow-auto px-2">
        <div className="flex items-center sticky top-0 bg-primary text-pure max-sm:text-xs max-sm:font-medium p-3 max-sm:p-2">
          <h6 className="basis-2/12">Image</h6>
          <h6 className={appStyles.PRODUCT_LIST_HEAD}>Title</h6>
          <h6 className={appStyles.PRODUCT_LIST_HEAD}>Qty</h6>
          <h6 className={appStyles.PRODUCT_LIST_HEAD}>Price</h6>
          <h6 className={appStyles.PRODUCT_LIST_HEAD}>Status</h6>
          <h6 className={appStyles.PRODUCT_LIST_HEAD}>Actions</h6>
        </div>
        {productList.map((item) => (
          <ProductListItem data={item} key={`ProductListItem_${item.id}`} />
        ))}
      </div>
    </div>
  );
}
