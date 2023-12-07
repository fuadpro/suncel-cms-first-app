import { GlobalSchema } from "@suncel/nextjs";

export const HeaderListSchema: GlobalSchema = {
    slug: "header_list",
    name: "Header List",
    fields: [
        {
            type: "repeatable",
            slug: "links",
            name: "Link",
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