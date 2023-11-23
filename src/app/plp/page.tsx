import { SfButton } from '@storefront-ui/react';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <div>PLP</div>
      <SfButton variant="primary">Hello</SfButton>
      <SfButton variant="secondary">Hello</SfButton>
      <SfButton variant="tertiary">Hello</SfButton>
      <button className="px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>
    </div>
  );
}
