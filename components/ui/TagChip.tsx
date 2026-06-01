"use client";

interface TagChipProps {
  label: string;
}

export default function TagChip({ label }: TagChipProps) {
  return <span className="tag-chip">{label}</span>;
}
