import Link from 'next/link';

const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <Link href="/profile">
                <a className="dropdown-item">Profile</a>
            </Link>
            <Link href="/resources">
                <a className="dropdown-item">Resources</a>
            </Link>
            <Link href="/account">
                <a className="dropdown-item">Account</a>
            </Link>
        </div>
    );
};

export default DropdownMenu;