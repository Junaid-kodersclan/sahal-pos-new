"use client";

import Loader from "@/componets/common/Loader";
import { appStyles } from "@/theme/appStyles";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-pure z-10">
      <Loader
        loading
        loaderSize={80}
        loaderWidth={4}
        style={appStyles.PARENT_FULL_LOADER}
      />
    </div>
  );
}
