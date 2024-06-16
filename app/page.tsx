'use client';

import Image from 'next/image';

// Import our features
import features from './data/features';

export default function Home() {
  console.log('featues =>', features);
  return (
    <main className='bg-white m-4 shadow-sm rounded py-12 md:py-16 px-3 md:px-4'>
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
      <section className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className='flex flex-col items-center text-center mb-8 last:mb-0'
          >
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
