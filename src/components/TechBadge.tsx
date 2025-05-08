interface TechBadgeProps {
  techName: string;
}

export default function TechBadge({ techName }: TechBadgeProps) {
  // Consistent low-contrast style for all badges
  const baseStyle = "inline-block px-1.5 py-0.5 text-[10px] font-medium rounded"; // Even smaller text/padding
  const colorStyle = "bg-white/5 text-dark-text-secondary border border-white/5 group-hover:text-dark-text-primary group-hover:border-white/10"; // Subtle gray/transparent look

  return (
      <span className={`${baseStyle} ${colorStyle} transition-colors duration-150`}>
      {techName}
    </span>
  );
}