import React from "react";
import { SuncelBlock } from "@suncel/nextjs";
import { Text } from "@suncel/nextjs/components";

type BlockNameProps = {
  text: string;
};

// Simple React component
export const BlockName: SuncelBlock<BlockNameProps> = ({ text }) => {
  return (
    <div>
      <Text slug='text' value={text} />
    </div>
  );
};

// Suncel Schema
BlockName.suncel = {
  slug: "BlockName",
  displayName: "BlockName",
  defaultProps: {
    text: "New Block blobk bsdfshjdbfsd",
  },
  editor: {
    settings: [],
  },
};