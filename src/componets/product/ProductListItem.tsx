import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { appStyles } from "@/theme/appStyles";
import { ProductType } from "@/helper/types";
import { colors } from "@/theme/colors";
import { useState } from "react";
import Image from "next/image";

type PropsType = {
  data: ProductType | any;
};

export default function ProductListItem(props: PropsType) {
  const { data } = props;

  const [status, setStatus] = useState<boolean>(true);

  const handleToggleStatus = () => {
    setStatus((prev) => !prev);
  };

  // handle Select For update
  const handleSelectForUpdate = () => {
    console.log(data);
  };

  // handle Select For Delete
  const handleSelectForDelete = () => {
    console.log(data);
  };

  return (
    <div className="border-b border-iron border-opacity-40 flex items-center py-2 font-semibold max-sm:text-xs">
      <div className="basis-2/12">
        <Image
          width={100}
          height={100}
          src={data?.gallery ? data?.gallery[0] : ""}
          alt={`${data.title} image`}
          className="w-14 h-14 rounded-lg max-sm:w-10 max-sm:h-10"
        />
      </div>
      <p className={appStyles.PRODUCT_LIST_HEAD}>{data?.title}</p>
      <p className={appStyles.PRODUCT_LIST_HEAD}>{data?.stock}</p>
      <p className={appStyles.PRODUCT_LIST_HEAD}>{data?.price}</p>
      <div className={appStyles.PRODUCT_LIST_HEAD}>
        <button onClick={handleToggleStatus} className="text-2xl">
          {status ? (
            <BsToggle2On color={colors.primary} />
          ) : (
            <BsToggle2Off color={colors.dull} />
          )}
        </button>
      </div>
      <div className="basis-2/12 flex flex-col space-y-1 max-sm:justify-center max-sm:items-center">
        {/*  href={{pathname: routes.addProduct,query: { afdsafsad: "Asdfads" },}} */}
        <button
          onClick={handleSelectForUpdate}
          className={`${appStyles.PRODUCT_LIST_ITEM} text-secondary`}
        >
          <FaPencilAlt />
          <p className="max-sm:hidden">Edit</p>
        </button>
        <button
          onClick={handleSelectForDelete}
          className={`${appStyles.PRODUCT_LIST_ITEM} text-red`}
        >
          <FaTrash />
          <p className="max-sm:hidden">Delete</p>
        </button>
      </div>
    </div>
  );
}
