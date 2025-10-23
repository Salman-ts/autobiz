'use client';

import { useEffect, useState } from 'react';


export function DemoDataInitializer() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const seedDemoData = async () => {
      const hasSeeded = localStorage.getItem('autobiz_demo_data_seeded');
      
      if (!hasSeeded) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/seed-demo-data`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
              },
            }
          );

          if (response.ok) {
            localStorage.setItem('autobiz_demo_data_seeded', 'true');
            setInitialized(true);
          }
        } catch (error) {
          console.error('Error seeding demo data:', error);
        }
      } else {
        setInitialized(true);
      }
    };

    seedDemoData();
  }, []);

  return null;
}
