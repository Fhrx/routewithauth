export default function RoleBadge({ role }) {
  if (!role) return null

  const isAdmin = role === "admin"

  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-semibold
        ${isAdmin
          ? "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
          : "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"}
      `}
    >
      {isAdmin ? "ADMIN" : "USER"}
    </span>
  )
}