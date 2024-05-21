import { ClientButton } from '@/components/ClientButton';
import { Time } from '@/components/Time';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function Home() {
  const headersData = headers()
  const seconds = new Date().getSeconds();

  return (
    <main className="m-4 p-4 border-2 border-blue-600">
      <div className="text-blue-600">
        Server Side (Home Page)
      </div>

      <div>
        <ClientButton seconds={seconds}>
          <div className='text-blue-500 border-2 border-blue-500 m-2 p-2 w-max'>
            Server Side children: {headersData.get('host')}
            <Time />
          </div>
        </ClientButton>
        <div className="text-blue-500 text-sm">
          <Link href={`/?seconds=${seconds}`}>Nav link to {seconds}s</Link>
        </div>
      </div>
    </main>
  );
}
