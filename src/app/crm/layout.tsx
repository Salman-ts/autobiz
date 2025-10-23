import { ProtectedLayout } from '../components/layout/ProtectedLayout';

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
