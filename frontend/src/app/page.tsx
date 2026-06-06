'use client';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Camera,
  CreditCard,
  Library,
  Search,
  ShoppingBag,
  Store,
  Tag,
  Truck,
  Wallet,
} from 'lucide-react';
import { Pacifico } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const bannerImages = [
    '/images/Book1.jpg',
    '/images/Book2.jfif',
    '/images/Book3.jfif',
    '/images/Book4.jfif',
    '/images/Book5.jpg',
    '/images/Book6.png',
  ];

  const blogPosts = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwc2VsbCUyMGJvb2tzfGVufDB8fDB8fHww',
      title: 'Where and how to sell old books online?',
      description:
        'Get started with selling your used books online and earn money from your old books.',
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      imageSrc:
        'https://media.istockphoto.com/id/910384920/photo/kid-reading-near-locked-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=J3FL4ZVORItw_bkLzlVo4WO-xUy22S7Qqbuq2xusNnc=',
      title: 'What to do with old books?',
      description:
        'Learn about different ways to make use of your old books and get value from them.',
      icon: <Library className="w-6 h-6 text-primary" />,
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9sZCUyMCUyMGJvb2tzfGVufDB8fDB8fHww',
      title: 'What is KitaabKart?',
      description:
        'Discover how KitaabKart helps you buy and sell used books online easily.',
      icon: <Store className="w-6 h-6 text-primary" />,
    },
  ];

  const sellSteps = [
    {
      step: 'Step 1',
      title: 'Post an ad for selling used books',
      description:
        'Post an ad on KitaabKart describing your book details to sell your old books online.',
      icon: <Camera className="h-8 w-8 text-primary" />,
    },
    {
      step: 'Step 2',
      title: 'Set the selling price for your books',
      description:
        'Set the price for your books at which you want to sell them.',
      icon: <Tag className="h-8 w-8 text-primary" />,
    },
    {
      step: 'Step 3',
      title: 'Get paid into your UPI/Bank account',
      description:
        'You will get money into your account once you receive an order for your book.',
      icon: <Wallet className="h-8 w-8 text-primary" />,
    },
  ];

  const buySteps = [
    {
      step: 'Step 1',
      title: 'Select the used books you want',
      description:
        'Search from over thousands of used books listed on KitaabKart.',
      icon: <Search className="h-8 w-8 text-primary" />,
    },
    {
      step: 'Step 2',
      title: 'Place the order by making payment',
      description:
        "Then simply place the order by clicking on the 'Buy Now' button.",
      icon: <CreditCard className="h-8 w-8 text-primary" />,
    },
    {
      step: 'Step 3',
      title: 'Get the books delivered at your doorstep',
      description: 'The books will be delivered to you at your doorstep!',
      icon: <Truck className="h-8 w-8 text-primary" />,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image}
              alt="Banner"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Buy. Sell. Save.
          </h1>
          <p
            className={`${pacifico.className} mt-6 text-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-wide leading-tight md:text-4xl font-bold text-yellow-400 drop-shadow-lg italic`}
          >
            Read More Spend Less
          </p>
          {/* Red Brush underline */}
          <div className="mt-2 w-72 md:w-96 h-[6px] rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 shadow-[0_0_15px_rgba(255,0,0,0.6)]" />
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              className="group bg-gradient from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <Link href="/books">
                  <div className="text-left">
                    <div className="text-sm opacity-90">Shop Now</div>
                  </div>
                </Link>
              </div>
            </Button>
            <Button
              size="lg"
              className="group bg-gradient from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-6 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Store className="h-6 w-6" />
                </div>
                <Link href="/books">
                  <div className="text-left">
                    <div className="text-sm opacity-90">Sell Now</div>
                  </div>
                </Link>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
