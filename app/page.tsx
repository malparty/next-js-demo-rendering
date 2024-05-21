import { ClientButton } from '@/components/ClientButton';
import { headers } from 'next/headers';

export default async function Home() {
  const headersData = headers()
  return (
    <main className="m-4 p-4 border-2 border-blue-600">
      <div className="text-blue-600">
        Server Side (Home Page)
      </div>

      <div>
        <ClientButton>
          <div className='text-blue-500'>
            Server Side content: {headersData.get('host')}
          </div>
        </ClientButton>
      </div>
    </main>
  );
}
