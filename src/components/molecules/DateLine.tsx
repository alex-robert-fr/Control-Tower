import Skeleton from "react-loading-skeleton";
import useProject from "../../hooks/useProject";
import LineForm from "./LineForm";

function DateLine() {
  const { data, isLoading } = useProject();

  if (isLoading || !data)
    return <Skeleton containerClassName="flex-1" />;

  return (
    <LineForm name="Dates">
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
    </LineForm>
  );
}

export default DateLine;
