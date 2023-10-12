type PropsType = {
  title: string;
  qtyORAmt: string;
};

export default function DashboardCard(props: PropsType) {
  const { title, qtyORAmt } = props;

  return (
    <div className="bg-pure shadow-lg rounded-md flex flex-col items-center space-y-4 max-sm:space-y-2 py-6 max-sm:py-4 max-sm:mx-1">
      <h6 className="text-dull font-medium">{title}</h6>
      <h6 className="text-2xl font-bold">{qtyORAmt}</h6>
    </div>
  );
}
