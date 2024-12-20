'use client';
import dynamic from 'next/dynamic';

// Dynamically import the component with client-side rendering
const TextHoverEffectDemo = dynamic(() => import('../components/ui/TextHoverEffectDemo'), {
  ssr: false, // This disables server-side rendering for this component
});

export default function Page() {
  return <TextHoverEffectDemo />;
}
