import { Card } from "@/components/ui/card";

export default function UploadLabelPage() {
  return (
    <div className="container-pad">
      <h1 className="text-2xl font-semibold">Upload nutrition label</h1>
      <Card className="mt-4">
        <p className="font-medium">Label OCR placeholder</p>
        <p className="mt-1 text-sm text-stone-600">
          Route is wired for future OCR integration to parse ingredient and nutrition text from photos.
        </p>
      </Card>
    </div>
  );
}
