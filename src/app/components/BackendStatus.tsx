'use client';

import React, { useEffect, useState } from 'react';
import { Wifi, WifiOff } from 'lucide-react';
import { Badge } from './ui/badge';

export function BackendStatus() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    checkBackendConnection();
    const interval = setInterval(checkBackendConnection, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/make-server-244ac669/health`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          },
        }
      );
      setIsConnected(response.ok);
    } catch (error) {
      setIsConnected(false);
    }
  };

  if (isConnected === null) return null;

  return (
    <Badge
      variant={isConnected ? 'default' : 'secondary'}
      className={`fixed bottom-4 right-4 z-50 gap-2 ${
        isConnected
          ? 'bg-emerald-500 hover:bg-emerald-600'
          : 'bg-orange-500 hover:bg-orange-600'
      }`}
    >
      {isConnected ? (
        <>
          <Wifi className="h-3 w-3" />
          Backend Connected
        </>
      ) : (
        <>
          <WifiOff className="h-3 w-3" />
          Demo Mode
        </>
      )}
    </Badge>
  );
}
