type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <main className="container mx-auto border-2 w-desktop">{children}</main>
  );
}
