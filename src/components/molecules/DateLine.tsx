import Skeleton from "react-loading-skeleton";
import LineForm from "./LineForm";
import { useProject } from "@hooks";

export default function DateLine() {
  const { data, isLoading } = useProject();

  const dateLineRenderer = () => {
    if (isLoading || !data) return <Skeleton containerClassName="flex-1" />;
    return (
      <div className="flex">
        <input
          type="date"
          name="start-date"
          defaultValue={data.start_date}
          disabled
        />
        <p>➔</p>
        <input
          type="date"
          name="end-date"
          defaultValue={data.end_date ? data.end_date : data.start_date}
          disabled
        />
      </div>
    );
  };

  return <LineForm name="Dates">{dateLineRenderer()}</LineForm>;
}
