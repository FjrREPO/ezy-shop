"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
  }
});

export default function ProvidersConfig({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={client}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}