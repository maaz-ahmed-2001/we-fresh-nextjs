import React from "react";

const handler = (req: any, res: any) => {
  res.setPreviewData({ myKey: "myVal" });
  res.end();
};

export default handler;
