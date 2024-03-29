import type { Params, RightCardProps } from "../shared/types";
import HelpCenter from "./HelpCenter";
import sideBarData from "../templates/SideBar/sideBarData";

const RightCard = (props: Params<RightCardProps>): JSX.Element => {
  const { heading, stats, link, img } = props.params;

  return (
    <div className="rightCard flex">
      <div className="main flex">
        <div className="textDiv">
          <h1>{heading}</h1>
          <div className="flex">
            {stats.map(({ id, date, quantity, type }): JSX.Element => {
              return (
                <span key={id}>
                  {date} <br />
                  <small>
                    {quantity} {type}
                  </small>
                </span>
              );
            })}
          </div>
          <span className="flex link">
            {link.action} {link.icon}
          </span>
        </div>
        <div className="imageDiv">
          <img src={img.src} alt={img.alt} />
        </div>
      </div>
      <HelpCenter params={sideBarData[2]} />
    </div>
  );
};

export default RightCard;
