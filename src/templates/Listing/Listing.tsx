import type { Data, ListingProps } from "../../shared/types";
import { Cards, Sellers, Heading } from "../../components";
import "./Listing.scss";

const Listing = (props: Data<ListingProps>): JSX.Element => {
  const [heading, listingCards, topSellers, featuredSellers] = props.data;

  return (
    <div className="listingSection">
      <Heading params={heading} />
      <Cards params={listingCards} />
      <div className="sellers flex">
        <Sellers params={topSellers} />
        <Sellers params={featuredSellers} />
      </div>
    </div>
  );
};

export default Listing;
