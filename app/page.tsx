'use client';

import Image from 'next/image';

// Import our features
import features from './data/features';

interface Feature {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function Home(): JSX.Element {
  console.log('featues =>', features);
  return (
    <main className='bg-white m-4 shadow-sm md:shadow-md lg:shadow-lg rounded md:rounded-md py-12 md:py-16 lg:py-24 px-3 md:px-4 lg:px-24 container mx-auto'>
      <section className='grid grid-col-1 text-center mb-12 md:mb-16'>
        <h1 className='text-3xl md:text-5xl font-semibold text-neutral-900 order-2 mb-5'>
          Easy access to top quality images
        </h1>
        <p className='text-base font-semibold text-indigo-700 order-1 mb-3'>
          Premium abstract images
        </p>
        <p className='text-lg md:text-xl font-normal text-neutral-600 order-3'>
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </section>
      {/* Map over the features collection to display each feature */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12'>
        {features.map(({ id, icon, title, description }: Feature) => (
          <div key={id} className='flex flex-col items-center text-center'>
            <span className='h-12 w-12 bg-white rounded-full shadow flex items-center justify-center p-3 mb-5'>
              {icon}
            </span>
            <p className='text-xl font-semibold text-neutral-900 mb-2'>
              {title}
            </p>
            <p className='text-base font-normal text-neutral-600'>
              {description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
