type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <main className="container mx-auto w-desktop relative mt-7">
      {children}
    </main>
  );
}
