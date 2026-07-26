import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  href?: string;
  actionLabel?: string;
};

export default function SectionHeader({
  title,
  description,
  href,
  actionLabel,
}: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        )}
      </div>

      {href && actionLabel && (
        <Link
          href={href}
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
