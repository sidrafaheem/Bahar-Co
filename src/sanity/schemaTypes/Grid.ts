import {Rule} from "@sanity/types"

export default {
    name:"grid",
    type:"document",
    title:"Grid",
    fields: [
        {
            name: "image1",
            title: "GridImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image2",
            title: "GridImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image3",
            title: "GridImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image4",
            title: "GridImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image.")
        },
    ],
}