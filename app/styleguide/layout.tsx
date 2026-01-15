"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "./navigation"

export default function StyleguideLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar - Fixed */}
            <aside className="w-64 border-r bg-card p-6 flex flex-col gap-6 fixed top-0 left-0 h-screen overflow-y-auto z-10">
                <div>
                    <Link href="/styleguide" className="text-xl font-bold tracking-tight">
                        Design System
                    </Link>
                </div>

                <nav className="flex flex-col gap-6">
                    {navigation.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-1">
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "block px-3 py-2 rounded-md text-sm transition-colors font-medium",
                                                pathname === item.href
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-accent hover:text-accent-foreground text-foreground/80"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main content - offset by sidebar width */}
            <main className="flex-1 ml-64 min-h-screen">
                <div className="container py-10 px-10 max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
