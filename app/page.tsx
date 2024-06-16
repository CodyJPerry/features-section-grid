'use client';

import Image from 'next/image';

// Import our features
import features from './data/features';

export default function Home() {
  console.log('featues =>', features);
  return (
    <main className='bg-white m-4 shadow-sm rounded py-12 px-3'>
      <section className='grid grid-col-1 text-center mb-12'>
        <h1 className='text-3xl font-semibold text-neutral-900 order-2 mb-5'>
          Easy access to top quality images
        </h1>
        <p className='text-base font-semibold text-indigo-700 order-1 mb-3'>
          Premium abstract images
        </p>
        <p className='text-base font-normal text-neutral-600 order-3'>
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </section>
      {/* Map over the features collection to display each feature */}
      {features.map(({ id, icon, title, description }) => (
        <div key={id} className='flex flex-col items-center text-center'>
          <span className='h-12 w-12 bg-white rounded-full shadow flex items-center justify-center p-3 mb-5'>
            {icon}
          </span>
          <p className='text-xl font-semibold text-neutral-900 mb-2'>{title}</p>
          <p className='text-base font-normal text-neutral-600 mb-8'>
            {description}
          </p>
        </div>
      ))}
    </main>
  );
}
