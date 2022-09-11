export function microPush(microApp: string) {
  history.pushState(null, microApp, microApp)
}
