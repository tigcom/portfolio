import { onRequestOptions as __api_chat_js_onRequestOptions } from "D:\\project\\portfolio\\functions\\api\\chat.js"
import { onRequestPost as __api_chat_js_onRequestPost } from "D:\\project\\portfolio\\functions\\api\\chat.js"
import { onRequestPost as __api_contact_js_onRequestPost } from "D:\\project\\portfolio\\functions\\api\\contact.js"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_chat_js_onRequestOptions],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_js_onRequestPost],
    },
  {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_js_onRequestPost],
    },
  ]