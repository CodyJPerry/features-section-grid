'use client';

import Image from 'next/image';

// Import our features
import features from './data/features';

export default function Home() {
  console.log('featues =>', features);
  return (
    <main className='bg-white m-4 shadow-sm rounded py-12 px-3'>
      <section>
        <h1 className='text-3xl font-semibold text-neutral-900'>
          Easy access to top quality images
        </h1>
        <p className='text-base font-semibold text-indigo-700'>
          Premium abstract images
        </p>
        <p className='text-base font-normal text-neutral-600'>
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </section>
      {/* Map over the features collection to display each feature */}
      {features.map(({ id, icon, title, description }) => (
        <div key={id}>
          <span className='h-12 w-12 bg-white rounded-full shadow flex items-center justify-center p-3'>
            {icon}
          </span>
          <p className='text-xl font-semibold text-neutral-900'>{title}</p>
          <p className='text-base font-normal text-neutral-600'>
            {description}
          </p>
        </div>
      ))}
    </main>
  );
}
