'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  BookLock,
  ChevronRight,
  FileTerminal,
  Heart,
  HelpCircle,
  Lock,
  LogOut,
  Menu,
  Package,
  PiggyBank,
  Search,
  ShoppingCart,
  User,
  User2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleLoginDialog } from '@/store/slice/userSlice';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type MenuItem = {
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  content?: React.ReactNode;
  onClick?: () => void;
};

type MenuItemsProps = {
  className?: string;
  menuItems: MenuItem[];
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuItems = ({
  className = '',
  menuItems,
  setIsDropdownOpen,
}: MenuItemsProps) => (
  <div className={className}>
    {menuItems?.map((item, index) =>
      item?.href ? (
        <Link
          key={index}
          href={item.href}
          className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
          onClick={() => setIsDropdownOpen(false)}
        >
          {item.icon}
          <span>{item?.label}</span>
          {item?.content && <div className="mt-1">{item?.content}</div>}
          <ChevronRight className="w-4 h-4 ml-auto" />
        </Link>
      ) : (
        <button
          key={index}
          className="flex w-full items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
          onClick={item.onClick}
        >
          {item.icon}
          <span>{item?.label}</span>
          <ChevronRight className="w-4 h-4 ml-auto" />
        </button>
      ),
    )}
  </div>
);

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoginOpen = useSelector(
    (state: RootState) => state.user.isLoginDialogOpen,
  );
  const user = {
    profilePicture: '', // Replace with actual user data
    name: '',
    email: '',
  };
  const userPlaceholder = '';

  const handleLoginClick = () => {
    // Implement login logic here
    dispatch(toggleLoginDialog());
    setIsDropdownOpen(false);
  };

  const handleProtectionNavigation = (href: string) => {
    // Implement protection navigation logic here
    if (user) {
      router.push(href);
      setIsDropdownOpen(false);
    } else {
      dispatch(toggleLoginDialog());
      setIsDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  const menuItems = [
    ...(user && user
      ? [
          {
            href: 'account/profile',
            content: (
              <div className="flex space-x-4 items-center p-2 border-b">
                <Avatar className="w-8 h-8 rounded-full">
                  {user.profilePicture ? (
                    <AvatarImage alt="user profile"></AvatarImage>
                  ) : (
                    <AvatarFallback>MN</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-semibold text-md">{user.name}</span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </div>
            ),
          },
        ]
      : [
          {
            icon: <Lock className="h-5 w-5" />,
            label: 'Login / Sign Up',
            onClick: handleLoginClick,
          },
        ]),
    {
      icon: <User className="h-5 w-5" />,
      label: 'My Profile',
      onClick: () => handleProtectionNavigation('/account/profile'),
    },
    {
      icon: <Package className="h-5 w-5" />,
      label: 'My Orders',
      onClick: () => handleProtectionNavigation('/account/orders'),
    },
    {
      icon: <PiggyBank className="h-5 w-5" />,
      label: 'Selling Orders',
      onClick: () => handleProtectionNavigation('/account/selling-products'),
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      label: 'Cart',
      onClick: () => handleProtectionNavigation('/checkout/cart'),
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: 'My Wishlist',
      onClick: () => handleProtectionNavigation('/account/wishlist/'),
    },
    {
      icon: <User2 className="h-5 w-5" />,
      label: 'About us',
      href: '/about-us',
    },
    {
      icon: <FileTerminal className="h-5 w-5" />,
      label: 'Terms & Use',
      href: '/terms-and-use',
    },
    {
      icon: <BookLock className="h-5 w-5" />,
      label: 'Privacy Policy',
      href: '/privacy-policy',
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: 'Help',
      href: '/how-it-works',
    },
    ...(user && [
      {
        icon: <LogOut className="h-5 w-5" />,
        label: 'Logout',
        onClick: handleLogout,
      },
    ]),
  ];

  // const RenderMenuItems = ({ className = '' }) => (
  //   <div className={className}>
  //     {menuItems?.map((item, index) =>
  //       item?.href ? (
  //         <Link
  //           key={index}
  //           href={item.href}
  //           className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
  //           onClick={() => setIsDropdownOpen(false)}
  //         >
  //           {item.icon}
  //           <span>{item?.label}</span>
  //           {item?.content && <div className="mt-1">{item?.content}</div>}
  //           <ChevronRight className="w-4 h-4 ml-auto" />
  //         </Link>
  //       ) : (
  //         <button
  //           key={index}
  //           className="flex w-full items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
  //           onClick={item.onClick}
  //         >
  //           {item.icon}
  //           <span>{item?.label}</span>
  //           <ChevronRight className="w-4 h-4 ml-auto" />
  //         </button>
  //       ),
  //     )}
  //   </div>
  // );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/weblogo.png"
            alt="Kitaab Kart Logo"
            loading="eager"
            width={450}
            height={100}
            className="h-15 w-auto"
          />
        </Link>
        <div className="flex flex-1 justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="search for books, authors, genres..."
              className="w-full rounded-full pr-4 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-white-500"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button
              variant="secondary"
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-500"
            >
              Sell Used Books
            </Button>
          </Link>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Avatar className="w-8 h-8 rounded-full">
                  {user.profilePicture ? (
                    <AvatarImage alt="user profile"></AvatarImage>
                  ) : userPlaceholder ? (
                    <AvatarFallback>MN</AvatarFallback>
                  ) : (
                    <User className="ml-2 mt-2" />
                  )}
                </Avatar>
                My Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <MenuItems
                menuItems={menuItems}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/checkout/cart">
            <div className="relative">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5 mr-2 " />
                Cart
              </Button>
              {user && (
                <span className="absolute top-2 left-5 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs">
                  3
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="container mx-auto flex lg:hidden items-center justify-between p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SheetHeader>
              <SheetTitle className="sr-only"></SheetTitle>
            </SheetHeader>
            <div className="border-b p-4">
              <Link href="/">
                <Image
                  src="/images/weblogo.png"
                  alt="Kitaab Kart Logo"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
            <MenuItems
              menuItems={menuItems}
              setIsDropdownOpen={setIsDropdownOpen}
              className="py-2"
            />
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Kitaab Kart Logo"
            loading="eager"
            width={250}
            height={70}
            className="h-7 md:h-10 w-25 md:w-auto"
          />
        </Link>
        <div className="flex flex-1 justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="search books..."
              className="w-full rounded-full pr-4 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-white-500"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button
              variant="secondary"
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-500"
            >
              Sell Used Books
            </Button>
          </Link>
        </div> */}
        <Link href="/checkout/cart">
          <div className="relative">
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5 mr-2 " />
            </Button>
            {user && (
              <span className="absolute top-2 left-5 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs">
                3
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
