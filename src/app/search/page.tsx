'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchPage() {

    // useRouter
    const pathName = usePathname();
    const router = useRouter();

    // searchParams
    const searchParams = useSearchParams();

  return (
    <div>
        PathName: {pathName}

        <button className="border p-4 rounded" onClick={() => router.push('/')}>
            Home Page
        </button>

        <button>
            Search Params: {searchParams.get('category')}
        </button>
    </div>
  )
}
