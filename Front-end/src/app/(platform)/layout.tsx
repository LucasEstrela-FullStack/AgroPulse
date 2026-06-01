import { AppShell } from "@/components/layout/app-shell";

type PlatformLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
