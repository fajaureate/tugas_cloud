import Link from 'next/link'

export default function Breadcrumbs() {
    return (
        <nav className="text-sm text-gray-600 my-4" aria-label="Breadcrumb">
            <ol className="list-reset flex">
                <li><Link href="/" className="hover:underline text-blue-800">Home</Link></li>
                <li><span className="mx-2">/</span></li>
                <li><Link href="#" className="hover:underline text-blue-800">Patient & Visitor Guide</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="text-gray-800">Cipta Hospital in South Tangerang</li>
            </ol>
        </nav>
    )
} 