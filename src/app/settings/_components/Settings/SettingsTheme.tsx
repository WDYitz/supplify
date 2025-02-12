import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Minus, Moon, Sun } from "lucide-react";
import { useId } from "react";

export const SettingsTheme = () => {
  const id = useId();
  const items = [
    { value: "1", label: "Light", image: <Sun size={25} strokeWidth={2} /> },
    { value: "2", label: "Dark", image: <Moon size={25} strokeWidth={2} /> },
  ];

  return (
    <Card className="rounded-lg w-2/3">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex justify-between w-full items-start">
          <h2 className="flex items-center gap-1.5 text-sm font-medium">
            Temas
          </h2>
        </div>
      </CardHeader>
      <CardContent>
        <RadioGroup className="flex gap-3" defaultValue="1">
          {items.map((item) => (
            <label key={`${id}-${item.value}`}>
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="peer sr-only after:absolute after:inset-0"
              />
              <div
                className="p-4 flex justify-center items-center relative cursor-pointer overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5 outline-offset-2 transition-colors peer-[:focus-visible]:outline peer-[:focus-visible]:outline-2 peer-[:focus-visible]:[#8257E5]/70 peer-data-[disabled]:cursor-not-allowed peer-data-[state=checked]:border-[#8257E5] peer-data-[state=checked]:bg-accent peer-data-[disabled]:opacity-50"
              >
                {item.image}
              </div>
              <span className="group mt-2 flex items-center gap-1 peer-data-[state=unchecked]:text-muted-foreground/70">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="peer-data-[state=unchecked]:group-[]:hidden"
                  aria-hidden="true"
                />
                <Minus
                  size={16}
                  strokeWidth={2}
                  className="peer-data-[state=checked]:group-[]:hidden"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium">{item.label}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}