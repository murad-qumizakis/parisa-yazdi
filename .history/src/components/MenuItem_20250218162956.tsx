import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

interface SubPage {
  href: string;
}

interface MenuItemProps {
  MenuItemName: string;
  subPages?: Record<string, SubPage>;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ MenuItemName, subPages, href }) => {
  const hasDropdown = subPages && Object.keys(subPages).length > 0;

  return href ? (
    <Link href={href} className="block">
      <div className="group relative block cursor-pointer border-2 border-red-500 p-3 antialiased hover:bg-white hover:text-black group-hover:border-[#1B3764]">
        <div className="flex items-center text-white group-hover:bg-white group-hover:text-black">
          {MenuItemName}
          {hasDropdown && <FiChevronDown className="ml-2 text-lg" />}
        </div>
      </div>
    </Link>
  ) : (
    <div className="group relative block cursor-pointer border-2 border-red-500 p-3 antialiased hover:bg-white hover:text-black group-hover:border-[#1B3764]">
      <div className="flex items-center text-white group-hover:bg-white group-hover:text-black">
        {MenuItemName}
        {hasDropdown && <FiChevronDown className="ml-2 text-lg" />}
      </div>

      {hasDropdown && (
        <div className="hidden md:block">
          <div className="dropdown-container absolute -ml-3 mt-3 hidden justify-start whitespace-nowrap border border-t-0 border-black bg-white p-1 text-black group-hover:block">
            {Object.entries(subPages).map(([subPageName, subPage], i) => (
              <Link
                key={i}
                href={subPage.href}
                className="block px-4 py-2 pr-6 text-black antialiased hover:bg-black hover:text-white"
              >
                {subPageName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
