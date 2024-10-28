import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex space-x-2">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/settings">Settings</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/signin">signin</Link>
            </div>
        </>
    );
}
