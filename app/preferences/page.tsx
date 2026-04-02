"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

const preferenceOptions = [
  { key: "lowSugar", label: "Low sugar focus" },
  { key: "nutFree", label: "Nut-free" },
  { key: "dairyFree", label: "Dairy-free" },
  { key: "glutenAware", label: "Gluten-aware" },
  { key: "dyeAware", label: "Dye-aware" },
  { key: "proteinFocused", label: "Protein-focused" },
  { key: "lunchboxFriendly", label: "Lunchbox-friendly" },
  { key: "toddlerFriendly", label: "Toddler-friendly" },
  { key: "avoidArtificialSweeteners", label: "Avoid artificial sweeteners" },
  { key: "avoidSeedOils", label: "Avoid seed oils" }
];

export default function PreferencesPage() {
  const [values, setValues] = useState<Record<string, boolean>>({});

  return (
    <div className="container-pad space-y-4">
      <h1 className="text-2xl font-semibold">Household preferences</h1>
      <p className="text-sm text-stone-600">Customize scoring and suggestions based on what matters most in your home.</p>
      <Card className="space-y-3">
        {preferenceOptions.map((option) => (
          <div key={option.key} className="flex items-center justify-between rounded-xl border border-stone-200 p-3">
            <p className="text-sm font-medium">{option.label}</p>
            <Switch
              checked={!!values[option.key]}
              onCheckedChange={(checked) => setValues((prev) => ({ ...prev, [option.key]: checked }))}
            />
          </div>
        ))}
      </Card>
    </div>
  );
}
