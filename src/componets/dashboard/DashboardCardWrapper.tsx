import DashboardCard from "./DashboardCard";

type PropsType = {};

export default function DashboardCardWrapper(props: PropsType) {
  const {} = props;

  return (
    <div className="grid grid-cols-3 gap-4 mx-4 max-sm:mx-1 max-sm:grid-cols-1 max-sm:gap-2">
      <DashboardCard title="Revenue" qtyORAmt="$810,50" />
      <DashboardCard title="Purchase Orders" qtyORAmt="600,50" />
      <DashboardCard title="Online" qtyORAmt="$12,231" />
      <DashboardCard title="Products" qtyORAmt="$441,50" />
      <DashboardCard title="Sales Orders" qtyORAmt="12,231" />
      <DashboardCard title="Cash" qtyORAmt="$50,417" />
    </div>
  );
}
