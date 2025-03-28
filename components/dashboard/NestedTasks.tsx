'use client';

import { Task, TaskType } from '@/types/common';
import { MenuConfig, MenuTitle } from '@/utils/MenuConfig';
import { GridIcon, ListBulletIcon, MixerHorizontalIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import TaskCoordinate from './TaskCoordinate';
import TaskList from './TaskList';
import NoTask from './NoTask';

interface Props {
  title: string;
  taskList: Task[];
  taskType: TaskType
}

function NestedTasks({ title, taskList, taskType }: Props) {
  const [grid, setGrid] = useState<boolean>(false);

  const renderTaskView = () => {
    if (!taskList || taskList.length === 0) {
      return <NoTask taskType={taskType} />;
    }
    if (grid) return <TaskCoordinate taskList={taskList} />;
    return <TaskList taskList={taskList} />;
  };

  const renderViewButton = () => {
    if (grid) {
      return (
        <div
          className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
          onClick={() => { setGrid(false); }}
        >
          <ListBulletIcon className="h-4 w-4 2xl:h-5 2xl:w-5" />
        </div>
      );
    }
    return (
      <div
        className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100"
        onClick={() => { setGrid(true); }}
      >
        <GridIcon className="h-4 w-4 2xl:h-5 2xl:w-5" />
      </div>
    );
  };

  return (
    <div className="w-full h-full grid grid-rows-10">
      <div className="row-span-2 px-2 flex justify-between items-center">
        <div className="text-neutral-700 text-base 2xl:text-xl font-bold">{title}</div>
        <div className="flex justify-between items-center space-x-2 2xl:space-x-4">
          <div className="cursor-pointer p-2 rounded-lg bg-white shadow-lg hover:bg-gray-100">
            <Link href={MenuConfig[MenuTitle.PLANNER].href}>
              <MixerHorizontalIcon className="h-4 w-4 2xl:h-5 2xl:w-5" />
            </Link>
          </div>
          {renderViewButton()}
        </div>
      </div>
      <div className="row-span-8">
        {renderTaskView()}
      </div>
    </div>
  );
}

export default NestedTasks;
