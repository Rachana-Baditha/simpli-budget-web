import React from "react";

interface TripPreviewProps {
  id: number;
  name: string;
  currency: string;
}

export default function TripPreview(data: TripPreviewProps) {
  return <div>{data.name}</div>;
}
