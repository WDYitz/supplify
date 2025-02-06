"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { useState, type ChangeEvent } from "react"

// REFACTOR COMPONENT !!! 

export const SettingsInfo = () => {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const { user, isLoaded } = useUser()
  const imageSize = imageFile ? (imageFile?.size / 1024).toFixed(2) : 0

  const handleChangeUserImage = async () => {
    if (imageFile) {
      const userImageUpdated = await user?.setProfileImage({
        file: imageFile
      })

      if (userImageUpdated) await userImageUpdated?.reload()
    }
  }

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files ? e.target.files[0] : null
    setImageFile(file)
  }

  return (
    <div className="flex flex-col items-center border border-1 space-y-4 h-full w-full rounded-lg p-4 bg-[#161716]">
      <h2 className="text-2xl font-semibold w-full text-left">Conta</h2>
      <Card className="rounded-lg w-2/3">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex justify-between w-full items-start">
            <h2 className="flex items-center gap-1.5 text-sm font-medium">
              Informações da conta
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-sm">
                Ultima Atualização
              </p>
              <span className="text-sm">{user?.updatedAt ? new Date(user.updatedAt).toLocaleString() : "N/A"}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="rounded-lg shadow-sm p-6">
          <section>
            <div>
              <div className="flex gap-4">
                <div className="relative h-16 w-16 shrink-0 rounded-full">
                  {
                    isLoaded ? (
                      <Image
                        alt="User avatar"
                        src={user?.imageUrl ?? ""}
                        className="absolute inset-0 h-16 w-16 rounded-full"
                        width={100} height={100}
                      />
                    ) : (
                      <Skeleton className="absolute inset-0 h-16 w-16 rounded-full bg-gray-500" />
                    )
                  }
                </div>
                <div className="py-2">
                  <form className="flex items-center gap-2" encType="multipart/form-data" onSubmit={handleChangeUserImage}>
                    <Button variant="outline" size="sm" asChild type="button">
                      <Label htmlFor="file" className="relative border border-1 border-dashed p-2 rounded-md flex items-center gap-2">
                        <span className="text-sm font-medium">
                          Selecionar imagem
                        </span>
                        <Input type="file" className="absolute opacity-0 inset-0 w-full h-full" name="file" id="file" onChange={handleImageFileChange} />
                      </Label>
                    </Button>
                    <Button variant="outline" className="bg-transparent gap-2" type="submit">
                      Save
                    </Button>
                  </form>
                  <span className="mt-2 block text-xs text-gray-500">
                    Recommend size 1:1, up to 2mb
                  </span>
                  <div className="flex gap-4">
                    <span>{imageFile?.name}</span>
                    <span>{imageSize} KB</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="font-medium">
                    Nome
                  </label>
                  {
                    isLoaded ? (
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={user?.firstName ?? ""}
                      />
                    ) :
                      <Skeleton className="h-9 bg-gray-500" />
                  }
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium">
                    Sobrenome
                  </label>
                  {
                    isLoaded ? (
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={user?.lastName ?? ""}
                      />
                    ) :
                      <Skeleton className="h-9 bg-gray-500" />
                  }
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="font-medium">
                    Email
                  </label>
                  {
                    isLoaded ? user?.emailAddresses.map(email => (
                      <Input
                        key={email.id}
                        id="lastName"
                        placeholder="Enter last name"
                        value={email.emailAddress}
                      />
                    )) :
                      <Skeleton className="h-9 bg-gray-500" />
                  }
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div >
  )
}