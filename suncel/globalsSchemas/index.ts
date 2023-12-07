import { GlobalSchema } from "@suncel/nextjs";
import { AnnounceBarSchema } from "./announceBar";
import { FooterListSchema } from "./footer";
import { HeaderListSchema } from "./header";

// Add your globals here
export const globalsSchemas: GlobalSchema[] = [AnnounceBarSchema, FooterListSchema, HeaderListSchema];
