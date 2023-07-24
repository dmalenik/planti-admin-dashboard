import type { Data, ActivityProps } from "../../shared/types";
import { Customers, Heading } from "../../components";
import "./Activity.scss";

const Activity = (props: Data<ActivityProps>): JSX.Element => {
  const [activityHeading, activityCards] = props.data;

  return (
    <div className="activitySection">
      <Heading params={activityHeading} />
      <Customers params={activityCards} />
    </div>
  );
};

export default Activity;
