import { PublicLayout } from '../components/layout/PublicLayout';

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLayout>{children}</PublicLayout>;
}
