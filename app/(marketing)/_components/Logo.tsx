import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Logo() {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={`/logo.svg`}
        alt="Icon Logo"
        height={40}
        width={40}
        className="dark:hidden"
      />
      <Image
        src={`/logo-dark.svg`}
        alt="Icon Logo"
        height={40}
        width={40}
        className="hidden dark:block"
      />
      <p className={cn('font-semibold text-nowrap', font.className)}>d-Note</p>
    </div>
  );
}
