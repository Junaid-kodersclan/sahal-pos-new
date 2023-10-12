import { handleCheckStoreExistOrNot } from "@/helper/util";
import _ from "lodash";

type PropsType = {};

export default function StoreExist(props: PropsType) {
  const {} = props;

  return (
    <>
      {!handleCheckStoreExistOrNot() && (
        <p className="bg-red text-pure w-full z-50 text-center font-semibold text-lg py-1">
          You have to create a store first, to add any category, brand, product,
          customer
        </p>
      )}
    </>
  );
}
