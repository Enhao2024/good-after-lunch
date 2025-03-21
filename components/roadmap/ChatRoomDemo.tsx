/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

'use client';

import cn from '@/lib/utils';
import { AnimatedList } from '../ui/magicui/animated-list';

interface Item {
  name: string;
  description: string;
  time: string;
}

let notifications = [
  {
    name: 'Levi Tan',
    description: 'Receipe Share',
    time: '15m ago',
  },
  {
    name: 'Gibson_au',
    description: 'Coffee suggestions',
    time: '10m ago',
  },
  {
    name: 'BluxxJack',
    description: 'New fishing place',
    time: '5m ago',
  },
  {
    name: 'Kathy677',
    description: 'Anyone has a wrench?',
    time: '2m ago',
  },
];

notifications = Array.from({ length: 2 }, () => notifications).flat();

function Notification({ name, description, time }: Item) {
  return (
    <figure
      className={cn(
        'z-0 relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
        >
          <img className="rounded-full" width="32" height="32" alt="" src={`https://avatar.vercel.sh/${name}`} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
}

function ChatRoomDemo({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex h-[500px] w-full flex-col overflow-hidden p-2',
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
    </div>
  );
}

export default ChatRoomDemo;
