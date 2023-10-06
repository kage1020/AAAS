import type { MetaFunction } from '@remix-run/node';
import { Card, CardBody } from '@nextui-org/react';
import ReactPlayer from 'react-player';

export const meta: MetaFunction = () => {
  return [
    { title: 'Annotation App for Action Segmentation' },
    { name: 'description', content: 'Welcome to AAAS!' },
  ];
};

export default function Index() {
  return (
    <main className='bg-gray-200 dark:bg-gray-950 h-screen p-4 grid grid-cols-12 grid-rows-6 gap-2'>
      <Card className='bg-white dark:bg-gray-800 col-span-6 row-span-6'>
        <CardBody>editor</CardBody>
      </Card>
      <Card className='bg-white dark:bg-gray-800 col-span-6 row-span-4'>
        <CardBody>
          <ReactPlayer url={['https://www.youtube.com/watch?v=LXb3EKWsInQ']} />
        </CardBody>
      </Card>
      <Card className='bg-white dark:bg-gray-800 col-span-6 row-span-2'>
        <CardBody>controller</CardBody>
      </Card>
    </main>
  );
}
