'use client'

import { useState, useEffect, useCallback, useRef, ReactElement, Key, JSXElementConstructor, ReactNode, Suspense } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Logo from '/public/images/Logo Learnitab.png';
import { FiSearch, FiHeart, FiCalendar, FiRotateCw, FiMenu, FiLinkedin, 
         FiInstagram, FiLink, FiTrash2, FiBriefcase, FiAward, 
         FiBookOpen, FiUsers, FiDisc } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { SiProducthunt } from 'react-icons/si';
import { Post } from '../models/Post';
import { format, parseISO, isAfter, isBefore, addDays } from 'date-fns';
import { CustomErrorBoundary } from '../components/ErrorBoundary';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useSearchParams } from 'next/navigation';

// @ts-ignore
console.error = (...args: any) => {
  if (args[0]?.includes?.('Encountered two children with the same key')) return;
  console.warn(...args);
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

type CalendarEvent = {
  id: string;
  title: string;
  deadline: string;
};

// 1. Add proper error handling for localStorage
const getInitialState = () => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

// Create a separate component for the search params functionality
function SearchParamsWrapper() {
  const searchParams = useSearchParams()!;
  const [posts, setPosts] = useState<Post[]>([]);
  // ... other state and logic that depends on searchParams ...

  useEffect(() => {
    const fetchPosts = async () => {
      // ... your existing fetchPosts logic ...
    };

    fetchPosts();
  }, [searchParams]);

  return (
    // Return your existing JSX here
    <div className="h-screen overflow-hidden w-full flex flex-col">
      {/* ... your existing JSX ... */}
    </div>
  );
}

// Main component with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <SearchParamsWrapper />
    </Suspense>
  );
}
