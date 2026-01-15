import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BadgePage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
                <p className="text-lg text-muted-foreground">
                    Displays a badge or a component that looks like a badge.
                </p>
            </div>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Variants</CardTitle>
                        <CardDescription>All available badge styles.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Context Usage</CardTitle>
                        <CardDescription>Badges used in various contexts.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Unread Messages</span>
                            <Badge>12</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Status</span>
                            <Badge variant="secondary">Pending</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Error</span>
                            <Badge variant="destructive">Failed</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
