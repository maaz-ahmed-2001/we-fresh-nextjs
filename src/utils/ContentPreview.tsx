import { createClient } from "contentful";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const deliveryApiKey = process.env.CONTENTFUL_DELIVERY_API_KEY;
const previewApiKey = process.env.CONTENTFUL_PREVIEW_API_KEY;

const previewClient = createClient({
  space: spaceId!,
  accessToken: previewApiKey!,
  host: "preview.contentful.com",
});
