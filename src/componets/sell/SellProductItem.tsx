import { selectProductAction } from "@/store/orderSlice";
import { ProductType, StoreType } from "@/helper/types";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusCircleFill } from "react-icons/bs";
import Image from "next/image";
import _ from "lodash";

type PropsType = { data: ProductType };
type StoreDataType = { store: { storeList: StoreType[] } };

export default function SellProductItem(props: PropsType) {
  const { data } = props;

  // hooks variables
  const dispatch = useDispatch();

  const storeData = useSelector(
    (state: StoreDataType) => state.store.storeList[0]
  );

  const handleSelectProduct = (product: ProductType) => {
    dispatch(selectProductAction(product));
  };

  return (
    <div
      onClick={() => handleSelectProduct(data)}
      className="p-4 max-sm:p-2 rounded-md shadow bg-pure"
    >
      <Image
        width={100}
        height={100}
        alt="product image"
        src={data?.gallery ? data?.gallery[0] : ""}
        className="w-full md:h-40 h-32 rounded-t-md"
      />
      <h4 className="pt-4 font-medium max-sm:text-xs max-sm:leading-4">
        {data?.title}
      </h4>
      <div className="flex justify-between items-center -mt-2">
        <h4 className="text-primary font-semibold max-sm:text-sm max-sm:leading-4">
          {`${
            _.isObject(storeData.currency)
              ? // @ts-ignore
                storeData.currency.value
              : storeData.currency
          } ${data?.price}`}
        </h4>
        <BsPlusCircleFill className="text-secondary hover:text-jungle transition-all duration-300 cursor-pointer text-5xl max-sm:text-4xl" />
      </div>
    </div>
  );
}
