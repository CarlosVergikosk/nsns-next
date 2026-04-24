import { dictionaries } from "@/lib/i18n/translations";
import { defaultLocale } from "@/lib/i18n/config";
import { CoachDetailClient } from "@/components/coaches/CoachDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return dictionaries[defaultLocale].data.counselors.map((c) => ({ id: c.id }));
}

export default async function CoachDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <CoachDetailClient id={id} />;
}
