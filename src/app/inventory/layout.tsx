import { ProtectedLayout } from '../components/layout/ProtectedLayout';

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
