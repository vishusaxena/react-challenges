const comments = [
  {
    id: 1,
    user: "Alice",
    comment: "This is the main comment.",
    timestamp: "2025-08-07T14:00:00Z",
    replies: [
      {
        id: 2,
        user: "Bob",
        comment: "Thanks Alice! I agree with your point.",
        timestamp: "2025-08-07T14:05:00Z",
        replies: [
          {
            id: 3,
            user: "Charlie",
            comment: "Same here, Bob!",
            timestamp: "2025-08-07T14:10:00Z",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        user: "Diana",
        comment: "I think there's another way to look at it.",
        timestamp: "2025-08-07T14:07:00Z",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user: "Eve",
    comment: "Different topic, but still related.",
    timestamp: "2025-08-07T14:20:00Z",
    replies: [
      {
        id: 6,
        user: "Frank",
        comment: "Interesting take, Eve.",
        timestamp: "2025-08-07T14:22:00Z",
        replies: [],
      },
    ],
  },
];

export default comments;
