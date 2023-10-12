import { appStyles } from "@/theme/appStyles";
import { FaCloudUploadAlt } from "react-icons/fa";

type PropsType = {
  desc: string;
  title: string;
};

export default function ImageBox(props: PropsType) {
  const { title, desc } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>{title}</h3>
        <p className={appStyles.BOX_DESC}>{desc}</p>
      </div>
      <div className={appStyles.CONTENT_BOX_WRAPPER}>
        <div className={appStyles.CONTENT_BOX}>
          <FaCloudUploadAlt className="text-5xl text-iron mb-2" />
          <p className="text-sm text-center">
            <span className="font-extrabold text-txt text-base">
              Upload an image
            </span>
            or drag and drop <br /> PNG, JPG
          </p>
        </div>
      </div>
    </section>
  );
}
