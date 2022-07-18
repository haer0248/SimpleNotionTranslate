require("dotenv").config();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

exports.getDatabase = async function (req) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: '名前',
      rich_text: {
        contains: req,
      },
    },
  });
  const responseResults = response.results.map((page) => {
    return {
      ans : page.properties.ㄅㄆㄇㄈ.rich_text[0]?.plain_text,
      pinyin : page.properties.pinyin.rich_text[0]?.plain_text
    };
  });
  return responseResults;
};
