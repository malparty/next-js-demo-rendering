interface DynamicPageProps {
  params: {locale: string}
}

export default function DynamicPage({ params }: DynamicPageProps) {
  return (
    <div>
      {params.locale}
    </div>
  );
}