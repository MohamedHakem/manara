import CardList from '@/components/content/card-list';
import ContentHero from '@/components/content/content-hero';
import getChildrenByTypeAndSlug from '@/data/get-children-by-type-and-slug';
import getItemMetadataByTypeAndSlug from '@/data/get-item-metadata-by-type-and-slug';
import { TypeOptions } from '@/lib/types';
import { notFound } from 'next/navigation';
import LessonContent from './lesson-content';
import WhatYouWillLearn from './what-you-will-learn';

// Fetch with a single request in the page, not multiple requests within components.
// 1- Fetch needed data using slug & type,
// 2- pass it to the component: ContentHero and CardList

export default function ContentPage({ type, slug }: { type: TypeOptions; slug: string }) {
  if (!type || !slug) return notFound();

  const itemMetadata = getItemMetadataByTypeAndSlug(type, slug);
  const children = getChildrenByTypeAndSlug(type, slug);

  return (
    // <div className="w-full max-w-[45rem] md:max-w-4xl lg:w-[45rem] xl:w-[56rem] mx-auto pb-16 md:pb-4">
    <div className="w-full lg:w-[45rem] xl:w-[56rem] mx-auto pb-16 md:pb-4">
      {type === 'lesson' ? (
        <LessonContent />
      ) : (
        <div className="flex flex-col md:gap-2 md:py-4 md:px-8">
          {type === 'learn' ? null : (
            <>
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

              <WhatYouWillLearn type={type} />
            </>
          )}

          <CardList items={children} type={getCardListType(type)} />
        </div>
      )}
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
