import { PageHeader } from "@/components/layout/page-header";
import { MapsView } from "@/features/maps/components/maps-view";

export default function MapsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Geospatial operations"
        title="Maps"
        description="Monitor satellite layers, productivity signals, and climate exposure by property."
      />

      <MapsView />
    </div>
  );
}
