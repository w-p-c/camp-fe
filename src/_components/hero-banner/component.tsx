import { SfButton } from '@storefront-ui/react';
import { FunctionComponent } from 'react';

export const HeroBanner: FunctionComponent = () => (
  <div className="flex h-40 w-full justify-between bg-primary-50 p-6">
    <div className="flex flex-col justify-center">
      <p className="font-bold uppercase tracking-widest text-neutral-500 typography-text-xs md:typography-text-sm">
        Feel the music
      </p>
      <h1 className="mb-4 mt-2 font-bold leading-[67.5px] typography-display-1 typography-display-2">
        New Wireless Pro
      </h1>
      <p className="typography-text-base">
        Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
      </p>
    </div>
    <div className="flex flex-col justify-center">
      <SfButton>Cart</SfButton>
    </div>
  </div>
);
