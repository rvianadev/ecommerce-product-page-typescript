type Props = {
  children: React.ReactNode;
};

export function Container({ children }: Props) {
  return (
    <main className="w-[90%] xl:w-desktop mx-auto relative mt-7">
      {children}
    </main>
  );
}
