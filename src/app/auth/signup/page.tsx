import Image from "next/image";

import {
    Card, CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
export default function Signup() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-[32px] pb-[24px]">
                Make the most of your professional life
            </h1>
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign up</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-3">
                        <div>
                            <Label htmlFor="email">Email or phone number</Label>
                            <Input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <Label htmlFor="password">Password (6+ characters)</Label>
                            <Input type="password" placeholder="Password" />
                        </div>

                    </div>
                    <div className="flex flex-wrap my-4 gap-2">
                        <div className="text-xs text-[rgba(0,0,0,0.9)]">
                            By clicking Agree & Join, you agree to the CandidateHub  <div>
                                <a href="#" className="text-[#0a66c2]">User Agreement,</a>  <a href="#" className="text-[#0a66c2]">Privacy Policy,</a> and <a href="#" className="text-[#0a66c2]">Cookie Policy</a>.
                                </div>
                        </div>
                    </div>
                    <div>
                        <Button className="w-full rounded-full bg-[#0a66c2] py-6">Agree & Join</Button>
                    </div>
                    <div className="flex justify-between items-center gap-2 my-5">
                        <div className="h-0 w-full border-t">
                        </div>
                        <p className="text-sm text-[rgba(0,0,0,0.6)]">or</p>
                        <div className="h-0 w-full  border-t"></div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button variant={'outline'} className="w-full rounded-full text-[#3c4043] flex items-center justify-center gap-2">
                        <div>
                                    <Image src={"../../../../svg/google.svg"} alt="google icon" height={18} width={18} priority/>
                                </div>
                            Continue with Google</Button>
                    </div>
                    <div className="flex text-base items-center justify-center gap-2 my-5 pt-6">
                        <p className="">Already on CandidateHub? </p>
                        <a href="#" className="text-[#0a66c2]">Sign in</a>
                    </div>
                </CardContent>
            </Card>
        </main>

    )
}