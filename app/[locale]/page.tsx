interface DynamicPageProps {
  params: {locale: string}
}

const LOCALES = ['en', 'th', 'vn'];

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({
    locale: lang,
  }))
}

export default function DynamicPage({ params }: DynamicPageProps) {
  return (
    <div>
      {params.locale}
    </div>
  );
}