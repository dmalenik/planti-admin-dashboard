import { Cards } from './components';
import { Sellers } from '../../../../shared/components';
import { heading, cards, topSellers, featuredSellers } from './data';
import { Heading } from '../../../../shared/components';
import './Listing.scss';

const Listing = (): JSX.Element => {
  return (
    <div className='listingSection'>
      <Heading title={heading.title} action={heading.action} />
      <Cards items={cards} />
      <div className='sellers flex'>
        <Sellers
          id={topSellers.id}
          type={topSellers.type}
          heading={topSellers.heading}
          card={topSellers.card}
        />
        <Sellers
          id={featuredSellers.id}
          type={featuredSellers.type}
          heading={featuredSellers.heading}
          card={featuredSellers.card}
        />
      </div>
    </div>
  );
};

export default Listing;
