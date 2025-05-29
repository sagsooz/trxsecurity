"use client"

import { useState, useEffect } from "react"
import WebShellCard from "./web-shell-card"
import SearchBar from "./search-bar"
import { webShells } from "@/lib/data"
import { Terminal } from "lucide-react"

export default function WebShellList() {
  const [filteredShells, setFilteredShells] = useState(webShells)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    filterWebShells(searchQuery, activeFilter)
  }, [searchQuery, activeFilter])

  const filterWebShells = (query: string, filter: string) => {
    let result = webShells

    // Apply search query filter
    if (query) {
      result = result.filter(
        (shell) =>
          shell.name.toLowerCase().includes(query.toLowerCase()) ||
          shell.description.toLowerCase().includes(query.toLowerCase()) ||
          shell.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
      )
    }

    // Apply type filter
    if (filter !== "all") {
      result = result.filter((shell) => shell.type.toLowerCase() === filter)
    }

    setFilteredShells(result)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 border-4 border-t-[#00ff9d] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#00ff9d] font-mono text-lg">Loading web shells...</p>
      </div>
    )
  }

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4 flex items-center">
          <Terminal className="mr-2 h-6 w-6 text-[#00ff9d]" />
          <span>Web Shell Collection</span>
        </h2>
        <p className="text-gray-400 font-mono">
          Browse our curated collection of web shells for ethical penetration testing and security research.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

      {filteredShells.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShells.map((shell) => (
            <WebShellCard key={shell.id} webShell={shell} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-[#2a2a3a] rounded-lg">
          <p className="text-gray-400 font-mono text-lg mb-2">No web shells found</p>
          <p className="text-gray-500 font-mono">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </section>
  )
}
