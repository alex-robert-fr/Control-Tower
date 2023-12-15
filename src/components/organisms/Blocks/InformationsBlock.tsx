import Skeleton from "react-loading-skeleton";
import useProject from "../../../hooks/useProject";
import BlockTemplate from "./BlockTemplate";
import ManagerLine from "../../molecules/ManagerLine";
import DateLine from "../../molecules/DateLine";

function InformationsBlock() {
  const { data, isLoading } = useProject();

  return (
    <>
      <h1>{data ? `${data.name} (${data.reference})` : <Skeleton />}</h1>
      <section>
        <BlockTemplate title="Informations">
          <ManagerLine
            idProjectManager={data?.manager_id}
            isProjectLoading={isLoading}
          />
					<DateLine />
        </BlockTemplate>
      </section>
    </>
  );
}

export default InformationsBlock;
