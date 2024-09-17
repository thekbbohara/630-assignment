/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SVMQj4ADPxH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export function Toast() {
  return (
    (<div>
      <div>
        <div
          className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 px-4 py-8 sm:px-6 sm:py-10 md:max-w-[420px]" />
        <div
          className="grid w-full max-w-md items-center justify-between gap-2 rounded-md bg-background p-4 shadow-lg animate-in slide-in-from-bottom-5 data-[state=open]:animate-in slide-in-from-bottom-5 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=closed]:animate-out fade-out-5 data-[state=closed]:translate-x-[var(--radix-toast-swipe-end-x)]">
          <div className="text-sm font-medium">Delete Confirmed</div>
          <div className="text-sm text-muted-foreground">The item has been deleted.</div>
          <div>
            <Button variant="ghost" size="icon">
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>)
  );
}

function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
