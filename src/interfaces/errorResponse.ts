import { MessageResponse } from "./messageResponse";

export default interface ErrorMessage extends MessageResponse {
  stack?: string;
}
