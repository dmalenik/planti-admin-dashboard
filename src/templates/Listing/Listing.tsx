import type { Data } from '../../shared/types/SideBar/sideBarTypes';
import type { ListingProps } from '../../shared/types/Listing/listingTypes';
import { ListingCards, Sellers, Heading } from '../../components';
import './Listing.scss';

const Listing = (props: Data<ListingProps>): JSX.Element => {
  const [heading, listingCards, topSellers, featuredSellers] = props.data;

  return (
    <div className='listingSection'>
      <Heading params={heading} />
      <ListingCards params={listingCards} />
      <div className='sellers flex'>
        <Sellers params={topSellers} />
        <Sellers params={featuredSellers} />
      </div>
    </div>
  );
};

export default Listing;
