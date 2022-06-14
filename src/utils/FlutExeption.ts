class FlutException {
  message?: string;
  type?: string;
  constructor(args: { message?: string; type?: string }) {
    this.message = args.message;
    this.type = args.type;
  }

  thtrow() {
    throw this;
  }
}

function WidgetExeption(args: { message?: string }) {
  new FlutException({ type: "WidgetError", ...args }).thtrow();
}

function ConversioException(args: { message?: string }) {
  new FlutException({ type: "Conversion Exception", message: args.message });
}
function noStateExeption(args: { message?: string }) {
  new FlutException({ type: "Unbinded State Exception", message: args.message });
}
export { WidgetExeption, ConversioException,noStateExeption };
