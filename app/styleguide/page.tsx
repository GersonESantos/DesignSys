import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Terminal } from "lucide-react"

export default function StyleguidePage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Design Tokens</h1>
                <p className="text-lg text-muted-foreground">
                    Core design values for the application including colors, typography, and spacing.
                </p>
            </div>

            {/* COLORS */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Colors</h2>

                <div className="space-y-8">
                    {/* Base Colors */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Base</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <ColorSwatch name="Background" variable="bg-background" />
                            <ColorSwatch name="Foreground" variable="bg-foreground" text="text-background" />
                            <ColorSwatch name="Card" variable="bg-card" />
                            <ColorSwatch name="Card Foreground" variable="bg-card-foreground" text="text-background" />
                            <ColorSwatch name="Popover" variable="bg-popover" />
                            <ColorSwatch name="Popover FG" variable="bg-popover-foreground" text="text-background" />
                        </div>
                    </div>

                    {/* Brand Colors */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Brand & Functional</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <ColorSwatch name="Primary" variable="bg-primary" text="text-primary-foreground" />
                            <ColorSwatch name="Primary FG" variable="bg-primary-foreground" />
                            <ColorSwatch name="Secondary" variable="bg-secondary" text="text-secondary-foreground" />
                            <ColorSwatch name="Secondary FG" variable="bg-secondary-foreground" text="text-background" />
                            <ColorSwatch name="Muted" variable="bg-muted" text="text-muted-foreground" />
                            <ColorSwatch name="Muted FG" variable="bg-muted-foreground" text="text-background" />
                            <ColorSwatch name="Accent" variable="bg-accent" text="text-accent-foreground" />
                            <ColorSwatch name="Accent FG" variable="bg-accent-foreground" text="text-background" />
                            <ColorSwatch name="Destructive" variable="bg-destructive" text="text-destructive-foreground" />
                            <ColorSwatch name="Destructive FG" variable="bg-destructive-foreground" />
                        </div>
                    </div>

                    {/* UI Elements */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">UI Elements</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <ColorSwatch name="Border" variable="bg-border" />
                            <ColorSwatch name="Input" variable="bg-input" />
                            <ColorSwatch name="Ring" variable="bg-ring" text="text-background" />
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Charts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <ColorSwatch name="Chart 1" variable="bg-chart-1" text="text-white" />
                            <ColorSwatch name="Chart 2" variable="bg-chart-2" text="text-white" />
                            <ColorSwatch name="Chart 3" variable="bg-chart-3" text="text-white" />
                            <ColorSwatch name="Chart 4" variable="bg-chart-4" text="text-white" />
                            <ColorSwatch name="Chart 5" variable="bg-chart-5" text="text-white" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Sidebar</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <ColorSwatch name="Sidebar" variable="bg-sidebar" text="text-sidebar-foreground" />
                            <ColorSwatch name="Sidebar FG" variable="bg-sidebar-foreground" text="text-sidebar-primary-foreground" />
                            <ColorSwatch name="Sidebar Primary" variable="bg-sidebar-primary" text="text-sidebar-primary-foreground" />
                            <ColorSwatch name="Sidebar Accent" variable="bg-sidebar-accent" text="text-sidebar-accent-foreground" />
                            <ColorSwatch name="Sidebar Border" variable="bg-sidebar-border" />
                            <ColorSwatch name="Sidebar Ring" variable="bg-sidebar-ring" />
                        </div>
                    </div>
                </div>
            </section>

            {/* TYPOGRAPHY */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Typography</h2>
                <div className="grid gap-8 p-6 border rounded-lg">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Heading 1</h1>
                        <p className="text-muted-foreground">text-4xl font-extrabold tracking-tight lg:text-5xl</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">Heading 2</h2>
                        <p className="text-muted-foreground">text-3xl font-semibold tracking-tight</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
                        <p className="text-muted-foreground">text-2xl font-semibold tracking-tight</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
                        <p className="text-muted-foreground">text-xl font-semibold tracking-tight</p>
                    </div>
                    <div className="space-y-2">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            The king, seeing how much <strong>bold text</strong> means to the people, decided to make the standard body text readable and elegant.
                            This is a standard paragraph with default leading and spacing.
                        </p>
                        <p className="text-muted-foreground">body text (p)</p>
                    </div>
                </div>
            </section>

            {/* SHAPE & RADIUS */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Shape & Radius</h2>
                <div className="flex flex-wrap gap-4">
                    <div className="w-24 h-24 bg-primary rounded-none flex items-center justify-center text-primary-foreground text-xs">None</div>
                    <div className="w-24 h-24 bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-xs">SM</div>
                    <div className="w-24 h-24 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">MD (Default)</div>
                    <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xs">LG</div>
                    <div className="w-24 h-24 bg-primary rounded-xl flex items-center justify-center text-primary-foreground text-xs">XL</div>
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">Full</div>
                </div>
            </section>

            {/* SHADOWS */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Shadows</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="h-24 bg-card rounded-md shadow-sm border flex items-center justify-center">Shadow SM</div>
                    <div className="h-24 bg-card rounded-md shadow border flex items-center justify-center">Shadow (Default)</div>
                    <div className="h-24 bg-card rounded-md shadow-md border flex items-center justify-center">Shadow MD</div>
                    <div className="h-24 bg-card rounded-md shadow-lg border flex items-center justify-center">Shadow LG</div>
                    <div className="h-24 bg-card rounded-md shadow-xl border flex items-center justify-center">Shadow XL</div>
                    <div className="h-24 bg-card rounded-md shadow-2xl border flex items-center justify-center">Shadow 2XL</div>
                </div>
            </section>

            {/* COMPONENTS PREVIEW */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Components Preview</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Example Card</CardTitle>
                            <CardDescription>A preview of the card component with default styling.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                            </div>

                            <Alert>
                                <Terminal className="h-4 w-4" />
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    You can add components to your app using the cli.
                                </AlertDescription>
                            </Alert>

                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label>Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label>Comfortable</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label>Compact</Label>
                                </div>
                            </RadioGroup>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="ghost">Cancel</Button>
                            <Button>Submit</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Button Variants</CardTitle>
                            <CardDescription>Buttons in different states and styles.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <Button>Default</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon" className="h-10 w-10">Icon</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

function ColorSwatch({ name, variable, text }: { name: string; variable: string; text?: string }) {
    return (
        <div className="space-y-1.5">
            <div
                className={`h-16 w-full rounded-lg border shadow-sm flex items-end p-2 ${variable} ${text || 'text-foreground'}`}
            >
            </div>
            <div className="space-y-0.5">
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-xs text-muted-foreground font-mono">{variable.replace('bg-', '')}</div>
            </div>
        </div>
    )
}
