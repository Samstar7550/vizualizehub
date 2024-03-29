import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "VizualizeHub",
  description: "AI-powered image Manipulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#d93f4e' }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          <SpeedInsights />
          <Analytics/>
        </body>
      </html>
    </ClerkProvider> 
  );
}
