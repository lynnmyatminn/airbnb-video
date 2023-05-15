'use client';
import Container from '../Container';
import { TbBeach, TbMountain } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This is Beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This is Windmills',
  },
  {
    label: 'Villas',
    icon: MdOutlineVilla,
    description: 'This is Villas',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This is countryside',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();
  const isMainPage = pathName === '/';
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
  pt-4
  flex
  flex-row
  items-center
  justify-between
  overflow-x-auto
  "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
