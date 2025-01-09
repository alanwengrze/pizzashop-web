interface HeaderProps {
  title: string
}
export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">Header</h1>
    </header>
  );
}