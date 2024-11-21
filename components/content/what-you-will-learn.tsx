import { TypeOptions } from '@/lib/types';
import Callout from '../callout';

export default function WhatYouWillLearn({ type }: { type: TypeOptions }) {
  return <div className='border-b md:border-0 w-full md:pb-2'>
    <Callout title={`In this ${type} you'll learn:`} />
    </div>
}
