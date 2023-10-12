import { MdOutlineArrowBackIos } from "react-icons/md";

type PropsType = {
  handleGoToOptions: () => void;
};

export default function ProfileGoBackButton(props: PropsType) {
  const { handleGoToOptions } = props;

  return (
    <button
      type="button"
      onClick={handleGoToOptions}
      className="text-2xl mr-1 rounded-md md:hidden"
    >
      <MdOutlineArrowBackIos />
    </button>
  );
}
