'use client';

import { useConvexAuth } from 'convex/react';
import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

import { useScrollTop } from '@/hooks/useScrollTop';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Logo from './Logo';
import ModeToggle from '@/components/ModeToggle';
import Spinner from '@/components/Spinner';
import Link from 'next/link';

export default function Navbar() {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Sign Up Free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/documents`}>Get Started</Link>
            </Button>
            <UserButton afterSwitchSessionUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
