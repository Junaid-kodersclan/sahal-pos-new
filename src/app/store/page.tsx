import StoreBoxWrapper from "@/componets/store/StoreBoxWrapper";
import { appStyles } from "@/theme/appStyles";

export default function StorePage() {
  return (
    <div className="bg-light">
      <h2 className={`${appStyles.PAGE_TITLE} sm:px-7 py-4`}>Store</h2>
      <StoreBoxWrapper />
    </div>
  );
}
