import { Heading, Cards, Sellers } from './components';
import { heading, cards, topSellers, featuredSellers } from './data';
import './Listing.scss';

const Listing = (): JSX.Element => {
  return (
    <div className='listingSection'>
      <Heading title={heading.title} action={heading.action} />
      <Cards items={cards} />
      <Sellers items={[topSellers, featuredSellers]} />
    </div>
  );
};

export default Listing;
