export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Mock GET response",
      data: {
        "article-text": {
          title: "RICOBOT",
          header: "MORE FROM RICO THE DOG",
          banner: "RICO IS BACK!",
          description:
            "Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on PS5!",
          cta: {
            text: "LEARN MORE",
            link: "https://www.google.com/search?q=rico+the+dog",
            linkOut: true,
          },
        },
        "article-images": [
          {
            id: 1,
            order: 1,
            "foreground-url": "/assets/1-foreground-cutout.png",
            "background-url": "/assets/1-background.png",
            "thumbnail-url": "/assets/1-thumbnail.png",
            "alt-text": "ricobot 1",
            category: "ricobot",
          },
          {
            id: 2,
            order: 2,
            "background-url": "/assets/2-background.png",
            "thumbnail-url": "/assets/2-thumbnail.png",
            "alt-text": "ricobot 2",
            category: "ricobot",
          },
          {
            id: 3,
            order: 3,
            "background-url": "/assets/3-background.png",
            "thumbnail-url": "/assets/3-thumbnail.png",
            "alt-text": "ricobot 3",
            category: "ricobot",
          },
          {
            id: 5,
            order: 5,
            "background-url": "/assets/5-background.png",
            "thumbnail-url": "/assets/5-thumbnail.png",
            "alt-text": "ricobot 5",
            category: "ricobot",
          },
          {
            id: 4,
            order: 4,
            "background-url": "/assets/4-background.png",
            "thumbnail-url": "/assets/4-thumbnail.png",
            "alt-text": "ricobot 4",
            category: "ricobot",
          },
          {
            id: 6,
            order: 6,
            "background-url": "/assets/6-background.png",
            "thumbnail-url": "/assets/6-thumbnail.png",
            "alt-text": "ricobot 6",
            category: "ricobot",
          },
        ],
      },
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
