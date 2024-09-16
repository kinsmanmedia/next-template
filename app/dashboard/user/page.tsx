import { Card, CardContent } from "@/components/ui/card"
export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <Card>
                        <CardContent className="pt-6">
                            <h1 className="text-2xl font-bold">User</h1>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
