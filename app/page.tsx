'use client';

import Image from 'next/image';

// Import our features
import features from './data/features';

export default function Home() {
  console.log('featues =>', features);
  return (
    <main className='bg-white m-4 shadow-sm rounded'>
      <section>
        <h1>Easy access to top quality images</h1>
        <p>Premium abstract images</p>
        <p>
          In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence.
        </p>
      </section>
      {/* Map over the features collection to display each feature */}
      {features.map(({ id, icon, title, description }) => (
        <div key={id}>
          {icon}
          <p>{title}</p>
          <p>{description}</p>
        </div>
      ))}
    </main>
  );
}
