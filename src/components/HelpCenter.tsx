import type { Params, HelpCenterProps } from "../shared/types";

const HelpCenter = (props: Params<HelpCenterProps>): JSX.Element => {
  const { icon, title, description, btnText } = props.params;

  return (
    <div className="sideBarCard">
      {icon}
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">{btnText}</button>
      </div>
    </div>
  );
};

export default HelpCenter;
