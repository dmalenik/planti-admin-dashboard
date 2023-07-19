import { ListingCards, Sellers, Heading } from '../../components';
import './Listing.scss';

const { listingsHeading, listingCards, topSellers, featuredSellers } =
  await import('../../shared/data');

const Listing = (): JSX.Element => {
  return (
    <div className='listingSection'>
      <Heading title={listingsHeading.title} action={listingsHeading.action} />
      <ListingCards items={listingCards} />
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
