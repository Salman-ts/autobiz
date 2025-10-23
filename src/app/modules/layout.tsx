import { PublicLayout } from '../components/layout/PublicLayout';

export default function ModulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}
