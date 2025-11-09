import column_01 from '/assets/images/elements/column-1.webp';
import column_02 from '/assets/images/elements/column-2.jpeg';
import column_03 from '/assets/images/elements/column-3.webp';
import column_04 from '/assets/images/elements/column-4.webp';
import hollow_core_01 from '/assets/images/elements/hollow-core-1.jpg';
import hollow_core_02 from '/assets/images/elements/hollow-core-2.webp';
import hollow_core_03 from '/assets/images/elements/hollow-core-3.webp';
import hollow_core_04 from '/assets/images/elements/hollow-core-4.jpg';
import tt_slabs_01 from '/assets/images/elements/tt-slabs-1.avif';
import tt_slabs_02 from '/assets/images/elements/tt-slabs-2.jpg';
import tt_slabs_03 from '/assets/images/elements/tt-slabs-3.jpg';
import tt_slabs_04 from '/assets/images/elements/tt-slabs-4.jpg';
import tt_slabs_05 from '/assets/images/elements/tt-slabs-5.jpg';

export type ElementType = 'column' | 'tt-slab' | 'hollow-core-slab';

export type ElementData = {
  id: number;
  src: string;
  name: string;
  location: [number, number]; // latitude, longitude
  amount: number;
  dimensions: [number, number, number]; // width, height, depth
  type: ElementType;
};

export const Elements: ElementData[] = [
  {
    id: 1,
    src: column_01.src,
    name: 'Columns 7x345 A',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'column'
  },
  {
    id: 2,
    src: column_02.src,
    name: 'Columns 7x345 B',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'column'
  },
  {
    id: 3,
    src: column_03.src,
    name: 'Columns 7x345 C',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'column'
  },
  {
    id: 4,
    src: column_04.src,
    name: 'Columns 7x345 D',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'column'
  },
  {
    id: 5,
    src: hollow_core_01.src,
    name: 'Hollow Core 8x345',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'hollow-core-slab'
  },
  {
    id: 6,
    src: hollow_core_02.src,
    name: 'Hollow Core 4 789',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'hollow-core-slab'
  },
  {
    id: 7,
    src: hollow_core_03.src,
    name: 'Hollow Core 8x345',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'hollow-core-slab'
  },
  {
    id: 8,
    src: hollow_core_04.src,
    name: 'Hollow Core 4 789',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'hollow-core-slab'
  },
  {
    id: 9,
    src: tt_slabs_01.src,
    name: 'TT-Slab 6 234',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'tt-slab'
  },
  {
    id: 10,
    src: tt_slabs_02.src,
    name: 'TT-Slab 789',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'tt-slab'
  },
  {
    id: 11,
    src: tt_slabs_03.src,
    name: 'TT-Slab 789',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'tt-slab'
  },
  {
    id: 12,
    src: tt_slabs_04.src,
    name: 'TT-Slab 6 234',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'tt-slab'
  },
  {
    id: 13,
    src: tt_slabs_05.src,
    name: 'TT-Slab 789',
    location: [55.67976570823383, 12.39401353031579],
    amount: 1,
    dimensions: [100, 100, 100],
    type: 'tt-slab'
  }
];
