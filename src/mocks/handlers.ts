import { rest } from "msw";
import { articles } from "../helpers/helpers";

export const handlers = [
  rest.get("http://localhost:3000/articles", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(articles));
  }),
];
