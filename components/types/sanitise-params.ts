// filtering the value
export function SanitiseParams(parameters?: Record<string, any>) {
  let params = { ...parameters };
  for (let key in params) {
    if (!params[key]) delete params[key];
  }
  return params;
}
