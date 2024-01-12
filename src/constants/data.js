import icons from './icons';
import images from './images';
import {COLORS} from './theme';

const categorylist = [
  {id: 1, text: 'Fashion'},
  {id: 2, text: 'Promo'},
  {id: 3, text: 'Policy'},
  {id: 4, text: 'Lookbook'},
  {id: 5, text: 'Sale'},
];

const homesliderlist = [
  {id: 0, image: images.home1},
  {id: 1, image: images.home2},
  {id: 2, image: images.home3},
];

const newarrival = [
  {id: 1, text: 'All'},
  {id: 2, text: 'Apparel'},
  {id: 3, text: 'Dress'},
  {id: 4, text: 'Tshirt'},
  {id: 5, text: 'Bag'},
];

const NewArrivallist = [
  {
    id: 0,
    img: images.home2,
    title: '21WN reversible angora cardigan',
    price: '120',
  },
  {
    id: 1,
    img: images.home3,
    title: '21WN reversible angora cardigan',
    price: '220',
  },
  {
    id: 2,
    img: images.home4,
    title: '21WN reversible angora cardigan',
    price: '125',
  },
  {
    id: 3,
    img: images.home5,
    title: 'Oblong bag',
    price: '120',
  },
];

const brand = [
  {id: 0, image: images.brand1},
  {id: 1, image: images.brand2},
  {id: 2, image: images.brand3},
  {id: 3, image: images.brand4},
  {id: 4, image: images.brand5},
  {id: 5, image: images.brand6},
];

const tranding = [
  {id: 1, text: '#2021'},
  {id: 2, text: '#spring'},
  {id: 3, text: '#collection'},
  {id: 4, text: '#fall'},
  {id: 5, text: '#dress'},
  {id: 6, text: '#autumncollection'},
  {id: 7, text: '#openfashion'},
  {id: 8, text: '#dress'},
];

const followus = [
  {
    id: 0,
    title: '@mia',
    img: images.black1,
  },
  {
    id: 1,
    title: '@_jihyn',
    img: images.black2,
  },
  {
    id: 2,
    title: '@mia',
    img: images.black3,
  },
  {
    id: 3,
    title: '@_jihyn',
    img: images.black4,
  },
];

const bloglist = [
  {
    id: 0,
    title: '2021 Style Guide: The Biggest Fall Trends',
    img: images.home5,
    day: '4 days ago',
    list: [
      {id: 1, text: '#Fashion'},
      {id: 2, text: '#Tip'},
    ],
  },
  {
    id: 1,
    title: '2021 Style Guide: The Biggest Fall Trends',
    img: images.home6,
    day: '5 days ago',

    list: [
      {id: 1, text: '#Fashion'},
      {id: 2, text: '#Tip'},
    ],
  },
  {
    id: 2,
    title: '2021 Style Guide: The Biggest Fall Trends',
    img: images.black3,
    day: '4 days ago',

    list: [
      {id: 1, text: '#Fashion'},
      {id: 2, text: '#Tip'},
    ],
  },
  {
    id: 3,
    title: '2021 Style Guide: The Biggest Fall Trends',
    img: images.skin1,
    day: '4 days ago',

    list: [
      {id: 1, text: '#Fashion'},
      {id: 2, text: '#Tip'},
    ],
  },
  {
    id: 4,
    title: '2021 Style Guide: The Biggest Fall Trends',
    img: images.black1,
    day: '4 days ago',

    list: [
      {id: 1, text: '#Fashion'},
      {id: 2, text: '#Tip'},
    ],
  },
];

const bloglistviewtype = [
  {
    id: 0,
    img: images.cloth2,
    title: '2021 Style Guide: The Biggest Fall Trends',
    subtitle:
      'The excitement of fall fashion is here and I’m already loving some of the trend forecasts ',
    day: '5 days ago',
  },
  {
    id: 1,
    img: images.home3,
    title: '3 Pairs of Denim You Won’t Believe',
    subtitle:
      'The excitement of fall fashion is here and I’m already loving some of the trend forecasts ',

    day: '6 days ago',
  },
  {
    id: 2,
    img: images.home4,
    title: '5 Fall Looks I’m Loving',
    subtitle:
      'The excitement of fall fashion is here and I’m already loving some of the trend forecasts ',

    day: '01/11/2021',
  },
  {
    id: 3,
    img: images.black2,
    title: '5 Fall Boot Trends You Need to Try',
    subtitle:
      'The excitement of fall fashion is here and I’m already loving some of the trend forecasts ',

    day: '01/11/2021',
  },
  {
    id: 3,
    img: images.cloth2,
    title: 'Style Guide: The Biggest Fall Trends',
    subtitle:
      'The excitement of fall fashion is here and I’m already loving some of the trend forecasts ',

    day: '01/11/2021',
  },
];

const hashlist = [
  {
    id: 0,
    text: '#Fashion',
  },
  {
    id: 1,
    text: '#Tips',
  },
];

const searchlist = [
  {
    id: 0,
    text: 'Dress',
  },
  {
    id: 1,
    text: 'Collection',
  },
  {
    id: 2,
    text: 'Nike',
  },
];

const searchlist1 = [
  {
    text: 'Trend',
  },
  {
    text: 'Dress',
  },
  {
    text: 'Bag',
  },
  {
    text: 'Tshirt',
  },
  {
    text: 'Beauty',
  },
  {
    text: 'Accessories',
  },
];

const categorygridlist = [
  {
    id: 0,
    img: images.cloth1,
    title: '21WN ',
    subtitle: 'reversible angora cardigan ',
    price: '120',
  },
  {
    id: 1,
    img: images.home3,
    title: '21WN ',
    subtitle: 'reversible angora cardigan ',
    price: '220',
  },
  {
    id: 2,
    img: images.cloth2,
    title: 'lamerei ',
    subtitle: 'reversible angora cardigan ',
    price: '125',
  },
  {
    id: 3,
    img: images.home5,
    title: 'Oblong bag',
    subtitle: 'reversible angora cardigan ',
    price: '120',
  },
  {
    id: 4,
    img: images.home2,
    title: '21WN ',
    subtitle: 'reversible angora cardigan ',
    price: '220',
  },
  {
    id: 5,
    img: images.home4,
    title: 'lamerei',
    subtitle: 'reversible angora cardigan ',
    price: '125',
  },
];

const categorygridlist1 = [
  {value: 0, label: 'Woman'},
  {value: 1, label: 'All apparel'},
  {value: 2, label: 'Man'},
];
const number = [
  {
    num: 1,
  },
  {
    num: 2,
  },
  {
    num: 3,
  },
  {
    num: 4,
  },
  {
    num: 5,
  },
];
const collection = [
  {
    id: 0,
    title: 'October collection',
    img: images.collaction1,
    num: '01',
  },
  {
    id: 1,
    title: 'Black collection',
    img: images.collaction2,
    num: '02',
  },
  {
    id: 2,
    title: 'HAE BY HAEKIM',
    img: images.black3,
    num: '03',
  },
  {
    id: 3,
    title: 'Yellow green collection',
    img: images.black1,
    num: '04',
  },
];
const categorylistview = [
  {
    id: 0,
    bigimg: images.cloth1,
    title: 'lamerei',
    rate: '4.9',
    subtitle: 'Recycle Boucle Knit Cardigan Pink',
    price: '120',
    sizes: [
      {id: 0, size: 'S'},
      {id: 1, size: 'M'},
      {id: 2, size: 'L'},
    ],
  },
  {
    id: 1,
    bigimg: images.cloth2,
    title: 'lamerei',
    rate: '4.9',
    subtitle: 'Recycle Boucle Knit Cardigan Pink',
    price: '120',
    sizes: [
      {id: 0, size: 'S'},
      {id: 1, size: 'M'},
      {id: 2, size: 'L'},
    ],
  },
  {
    id: 2,
    bigimg: images.cloth3,
    title: 'lamerei',
    rate: '4.9',
    subtitle: 'Recycle Boucle Knit Cardigan Pink',
    price: '120',
    sizes: [
      {id: 0, size: 'S'},
      {id: 1, size: 'M'},
      {id: 2, size: 'XL'},
    ],
  },
  {
    id: 3,
    bigimg: images.cloth4,
    title: 'lamerei',
    rate: '4.9',
    subtitle: 'Recycle Boucle Knit Cardigan Pink',
    price: '120',
    sizes: [
      {id: 0, size: 'S'},
      {id: 1, size: 'M'},
      {id: 2, size: 'XXL'},
    ],
  },
];

const paymentimg = [
  {
    id: 0,
    img: images.payment,
  },
  {
    id: 1,
    img: images.home4,
  },
  {
    id: 2,
    img: images.home2,
  },
];

const productlist2 = [
  {
    id: 0,
    img: images.ring1,
  },
  {
    id: 1,
    img: images.ring2,
  },
  {
    id: 2,
    img: images.ring3,
  },
  {
    id: 3,
    img: images.ring4,
  },
];

const ringsize = [
  {
    num: 6,
  },
  {
    num: 8,
  },
  {
    num: 9,
  },
  {
    num: 11,
  },
  {
    num: 12,
  },
  {
    num: 14,
  },
  {
    num: 16,
  },
];

const sizes = [
  {id: 0, size: 'S'},
  {id: 1, size: 'M'},
  {id: 2, size: 'L'},
];
const colors = [
  {id: 0, color: COLORS.black},
  {id: 1, color: COLORS.brown},
  {id: 2, color: COLORS.gray20},
];

const Drawerlisting = [
  {
    id: 0,
    name: 'New',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
  {
    id: 1,
    name: 'Apparel',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
  {
    id: 2,
    name: 'Bag',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
  {
    id: 3,
    name: 'Shoes',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
  {
    id: 4,
    name: 'Beauty',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
  {
    id: 5,
    name: 'Accessories',
    subcategory: [
      {id: 0, subcat: 'Shirt'},
      {id: 1, subcat: 'T-Shirt'},
      {id: 2, subcat: 'Dress'},
      {id: 3, subcat: 'Glof'},
      {id: 4, subcat: 'Jeans'},
      {id: 5, subcat: 'Top'},
    ],
  },
];
export default {
  categorylist,
  newarrival,
  NewArrivallist,
  homesliderlist,
  brand,
  tranding,
  followus,
  bloglist,
  bloglistviewtype,
  hashlist,
  categorygridlist,
  categorygridlist1,
  number,
  searchlist,
  searchlist1,
  collection,
  categorylistview,
  paymentimg,
  productlist2,
  ringsize,
  sizes,
  colors,
  Drawerlisting,
};
