export const hypersonixData = {
  heading: "My Experience at Hypersonix",

  details: [
    { value: "Lead Product Designer" },
    { value: "Oct'20 - May'22" }
  ],
  
  overview: {
    description: "At Hypersonix, I worked as the Lead Product Designer alongside the Head of Design and a small team of junior designers. My role spanned from 0→1 explorations to scaling design systems and improving core product experiences. I was responsible for setting design direction, delivering end-to-end solutions, and mentoring junior designers, while collaborating closely with product and engineering teams.",
    // image: "/images/projects/hx_overview.png" // Optional overview image
  },


  projects: [
    {
      title: "Enhancing Document Experience",
      description: "Documents is a product that helps users to create, compare, save and share analytical reports from our core products. Reports can also be created using a search on connected data sources.",
      sections: [
        {
          name: "Problem",
          content: "The UX was overloaded. Too much information and controls presented all at once. The interface lacked flexibility for comparing data, and users struggled with card creation, grouping, and managing layouts effectively.",
          images: [
            "/images/projects/hx_research_1.jpg",
            "/images/projects/hx_research_2.jpg"
          ]
        },
        {
          name: "Solution",
          content: [
            "Consolidated card controls into a single, consistent location.",
            "Introduced Outline (a table-of-contents-like view) to group, reorder, and manage cards.", 
            "Designed Quick Add for inline card creation, making it easier to add new or existing cards.",
            "Enabled structured layouts and tab groups for easier comparison of data."
          ],
          images: [
            "/images/projects/hx_design_system.png",
            "/images/projects/hx_components.gif"
          ]
        },
        {
          name: "Impact",
          content: [
            "12% increase in MAU.",
            "Average time spent on documents increased by 8 minutes.",
            "Task success rate for card creation & grouping rose to 20%."
          ]

        }
      ]
    },
    {
      title: "No-Code App Studio",
      description: "This was a 0→1 exploration to reimagine how customers could customize Hypersonix's analytical platform without relying on heavy manual work from our teams.",
      sections: [
        {
          name: "Problem",
          content: [
            "Each customer required unique configurations — inputs, data sources, ETL processes, and analysis methods.",
            "Customization was done manually by Hypersonix's forward deployment teams, making it time-consuming, inefficient, and hard to scale.",
          ],
          images: [
            "/images/projects/hx_research_1.jpg",
            "/images/projects/hx_research_2.jpg"
          ]
        },
        {
          name: "Solution",
          content: [
            "Designed a predefined studio environment for each customer, tailored to their needs.",
            "Gave customers self-serve customization through drag-and-drop modules and simple configuration options.", 
            "Enabled them to adjust inputs, processes, and analysis directly, reducing dependency on Hypersonix teams.",
          ],
          images: [
            "/images/projects/hx_design_system.png",
            "/images/projects/hx_components.gif"
          ]
        },
        {
          name: "Impact",
          content: [
            "Simplified experimentation for customer data science teams.",
            "Reduced internal effort and tech debt from repeated manual customizations.",
            "Early prototypes tested with clients like KFC, Home Depot, and Snowflake showed strong interest."
          ]
        }
      ]
    },
    {
      title: "New Onboarding Experience",
      description: "Onboarding is a critical stage in the customer journey. It sets the tone for how users perceive and adopt a product. At Hypersonix, we needed an onboarding flow that not only welcomed users but also helped them understand the value of the platform quickly.",
      sections: [
        {
          name: "Problem",
          content: [
            "Hypersonix had limited understanding of user personas entering the platform, which made personalization difficult.",
            "New users did not know what features were available or how to use them effectively.",
          ],
          images: [
            "/images/projects/hx_research_1.jpg",
            "/images/projects/hx_research_2.jpg"
          ]
        },
        {
          name: "Solution",
          content: [
            "Designed a predefined studio environment for each customer, tailored to their needs.",
            "Gave customers self-serve customization through drag-and-drop modules and simple configuration options.", 
            "The existing flow was long, mechanical, and confusing, with empty landing screens after setup, No feedback or reflection while configuring Hyperspaces, and difficulty in modifying inputs due to unclear hierarchy.",
          ],
          images: [
            "/images/projects/hx_design_system.png",
            "/images/projects/hx_components.gif"
          ]
        },
        {
          name: "Impact",
          content: [
            "Introduced selection-based reflection as the core concept.",
            "At every stage of onboarding, the user’s inputs generated a live preview of the final interface on the right-hand side.",
            "This not only gave immediate feedback but also trained users on what to expect once onboarding was complete."
          ]
        }
      ]
    },
    {
      title: "New Onboarding Experience",
      description: "Onboarding is a critical stage in the customer journey. It sets the tone for how users perceive and adopt a product. At Hypersonix, we needed an onboarding flow that not only welcomed users but also helped them understand the value of the platform quickly.",
      sections: [
        {
          name: "Problem",
          content: [
            "Hypersonix had limited understanding of user personas entering the platform, which made personalization difficult.",
            "New users did not know what features were available or how to use them effectively.",
          ],
          images: [
            "/images/projects/hx_research_1.jpg",
            "/images/projects/hx_research_2.jpg"
          ]
        },
        {
          name: "Solution",
          content: [
            "Designed a predefined studio environment for each customer, tailored to their needs.",
            "Gave customers self-serve customization through drag-and-drop modules and simple configuration options.", 
            "The existing flow was long, mechanical, and confusing, with empty landing screens after setup, No feedback or reflection while configuring Hyperspaces, and difficulty in modifying inputs due to unclear hierarchy.",
          ],
          images: [
            "/images/projects/hx_design_system.png",
            "/images/projects/hx_components.gif"
          ]
        },
        {
          name: "Impact",
          content: [
            "Introduced selection-based reflection as the core concept.",
            "At every stage of onboarding, the user’s inputs generated a live preview of the final interface on the right-hand side.",
            "This not only gave immediate feedback but also trained users on what to expect once onboarding was complete."
          ],
        }
      ]
    },
  ],
}