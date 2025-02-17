export const posts = [
    {
      id: 1,
      author: {
        avatar_url: "https://github.com/sergiomonteri.png",
        name: "Sergio Monteiro",
        role: "Web developer",
      },
      content: [
        { type: "paragraph", text: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", text: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2025-02-14 10:45"),
    },
    {
      id: 2,
      author: {
        avatar_url: "https://github.com/senseei.png",
        name: "Jane Doe",
        role: "UX Designer",
      },
      content: [
        { type: "paragraph", text: "Fala galeraa 👋 " },
        {
          type: "paragraph",
          text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", text: "jane.design/doctorcare" },
        { type: "paragraph", text: "#novoprojeto #nlw #rocketseat" },
      ],
      publishedAt: new Date("2025-02-15 23:05"),
    },
  ];