import CardList from '@/components/content/card-list';
import ContentHero from '@/components/content/content-hero';
import getChildrenByTypeAndSlug from '@/data/get-children-by-type-and-slug';
import getItemMetadataByTypeAndSlug from '@/data/get-item-metadata-by-type-and-slug';
import { TypeOptions } from '@/lib/types';
import { notFound } from 'next/navigation';

// Fetch with a single request in the page, not multiple requests within components.
// 1- Fetch needed data using slug & type,
// 2- pass it to the component: ContentHero and CardList

export default function ContentPage({ type, slug }: { type: TypeOptions; slug: string }) {
  if (!type || !slug) return notFound();

  const itemMetadata = getItemMetadataByTypeAndSlug(type, slug);
  // console.log('🚀 ~ ContentPage ~ itemMetadata:', itemMetadata);

  const children = getChildrenByTypeAndSlug(type, slug);
  // console.log('🚀 ~ ContentPage ~ children[0]:', children[0]);

  return (
    <div className="w-full lg:w-[56rem] md:max-w-4xl mx-auto pb-24">
      <ContentHero
        type={type}
        title={itemMetadata?.title}
        description={`Description: ${itemMetadata?.title}`}
        imageUrl={'thumbImg' in itemMetadata ? itemMetadata.thumbImg : undefined}
        completedItems={'completedItems' in itemMetadata ? itemMetadata?.completedItems : 0}
        totalItems={'totalItems' in itemMetadata ? itemMetadata?.totalItems : 0}
        estimatedHours={20}
        completedTasks={4}
        totalTasks={10}
      />
      <CardList items={children} type={getCardListType(type)} />
    </div>
  );
}

const getCardListType = (type: TypeOptions): TypeOptions => {
  switch (type) {
    case 'learn':
      return 'track';
    case 'track':
      return 'course';
    case 'course':
      return 'module';
    case 'module':
      return 'lesson';
    case 'lesson':
      return 'lesson';
    default:
      return type;
  }
};