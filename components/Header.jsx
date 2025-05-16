"use client";
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React, { useState, useEffect } from 'react';


const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <ClerkLoaded

      >
        <SignedOut>
              <SignInButton />
              {/* <SignUpButton /> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </ClerkLoaded>
    </div>
  )
}

export default Header