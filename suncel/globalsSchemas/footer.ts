import { GlobalSchema } from "@suncel/nextjs";

export const FooterListSchema: GlobalSchema = {
    slug: "footer_list",
    name: "Footer List",
    fields: [
        
        {
            name: "Footer text",
            type: "group",
            fields: [
                {
                    type: "image",
                    slug: "logo",
                    name: "Logo",
                },
                {
                    type: "text",
                    name: "Text-Logo",
                    slug: "text",
                },
                {
                    type: "text",
                    name: "Text-Copy",
                    slug: "textCopyriht",
                },
                {
                    type: "object",
                    slug: "socialMedia",
                    name: "SocialMedia",
                    fields: ["facebook", "instagram", "twitter", "github", "dribbble"].map((e) => ({
                    type: "text",
                    slug: e,
                    name: e,
                })),
                },

            ],
        },
        {
            type: "repeatable",
            slug: "links",
            name: "Nav Link",
            pluralName: "links",
            fields: [
                {
                    type: "text",
                    name: "Link label",
                    slug: "label",
                    defaultValue: "label",
                },
                {
                    type: "link",
                    name: "Link",
                    slug: "link",
                },
            ],
        },
    ],
};