"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { Session } from "next-auth"
import Image from "next/image"
import { SettingsTheme } from "./SettingsTheme"

interface SettingsInfoProps {
  session: Session
}

export const SettingsInfo = ({ session }: SettingsInfoProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 h-full w-full rounded-lg p-4">
      <Card className="rounded-lg w-2/3 bg-[#161716]">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex justify-between w-full items-start">
            <h2 className="flex items-center gap-1.5 text-sm font-medium">
              Informações da conta
            </h2>
            <div className="flex gap-2">
              <p className="font-medium text-sm">
                Ultima Sessão
              </p>
              <span className="text-sm">{session.expires ? new Date(session.expires).toLocaleString() : "N/A"}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="rounded-lg shadow-sm px-6">
          <section>
            <div>
              <div className="flex gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-full">
                  <Image
                    alt="User avatar"
                    src={session.user?.image ?? ""}
                    className="absolute inset-0 h-20 w-20 rounded-full"
                    width={200} height={200}
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-medium">
                    Nome
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    defaultValue={session.user?.name?.split(" ")[0] ?? ""}
                    readOnly
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium">
                    Sobrenome
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter email"
                    defaultValue={session.user?.name?.split(" ")[1] ?? ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter email"
                    defaultValue={session.user?.email ?? ""}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
      <SettingsTheme />
    </div >
  )
}