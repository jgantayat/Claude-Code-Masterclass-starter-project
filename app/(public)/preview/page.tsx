// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>

      <section className="mt-6">
        <h3 className="text-sm font-semibold text-body uppercase tracking-widest mb-4">Skeleton</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </section>
    </div>
  )
}
