import { Link } from "react-router";

export function PageHeader({ title, rootLabel = "SysArena" }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-lg font-medium">{title}</p>
      <div className="breadcrumbs hidden p-0 text-sm sm:inline">
        <ul>
          <li>
            <Link to="/">{rootLabel}</Link>
          </li>
          <li className="opacity-80">{title}</li>
        </ul>
      </div>
    </div>
  );
}
