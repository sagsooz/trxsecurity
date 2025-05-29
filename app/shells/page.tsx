import type { Metadata } from "next"
import Hero from "@/components/hero"
import SearchBar from "@/components/search-bar"
import WebShellList from "@/components/web-shell-list"

export const metadata: Metadata = {
  title: "Web Shells Collection | Bypass WebShell Hub",
  description: "A comprehensive collection of web shells for cybersecurity research and penetration testing.",
  keywords: "web shells, php shells, asp shells, jsp shells, cybersecurity tools, penetration testing",
}

export default function ShellsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <SearchBar />
      <WebShellList />
    </main>
  )
}
