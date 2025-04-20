export const user = [
  {
    id: 1,
    name: "John Doe",
    image: "https://picsum.photos/200/300",
    rating: 4.5,
    jobCount: 10,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://picsum.photos/200/300",
    rating: 4.5,
    jobCount: 10,
  },
  {
    id: 3,
    name: "Bob Smith",
    image: "https://picsum.photos/200/300",
    rating: 4.5,
    jobCount: 10,
  },
];

export const Jobs = [
  {
    id: 1,
    title: "Fix Dishwasher",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum.",
    category: "Plumbing",
    distance: 2.5,
    budget: 1000,
    client: user[0],
    posted: "2h ago",
  },
  {
    id: 2,
    title: "Broken Water Heater",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum.",
    category: "Plumbing",
    distance: 3.5,
    budget: 300,
    client: user[2],
    posted: "2h ago",
  },
  {
    id: 3,
    title: "Broken Door",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum.",
    category: "Carpentry",
    distance: 0.5,
    budget: 100,
    client: user[3],
    posted: "2h ago",
  },
  {
    id: 4,
    title: "Computer Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum. Donec euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, euismod aliquam nisl ipsum in ipsum.",
    category: "Electronics",
    distance: 0.5,
    budget: 100,
    client: user[3],
    posted: "2h ago",
  },
];
