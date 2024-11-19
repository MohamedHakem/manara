import { TypeOptions } from '@/lib/types';
import Callout from '../callout';

export default function WhatYouWillLearn({ type }: { type: TypeOptions }) {
  return <div className='border-b md:border-0 w-full md:py-2 md:px-4'>
    <Callout type={type} />
    </div>
}
