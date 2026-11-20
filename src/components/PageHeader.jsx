import { Link } from "react-router";

export function PageHeader({ title, rootLabel = "SysArena" }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
      <div className="breadcrumbs hidden p-0 text-sm text-base-content/70 sm:inline">
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
