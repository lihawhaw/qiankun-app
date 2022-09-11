export declare type OnGlobalStateChangeCallback = (
  state: Record<string, any>,
  prevState: Record<string, any>,
) => void

export declare type MicroAppProps = {
  container: Document | any
  onGlobalStateChange: (
    callback: OnGlobalStateChangeCallback,
    fireImmediately?: boolean,
  ) => void
  setGlobalState: (state: Record<string, any>) => boolean
  offGlobalStateChange: () => boolean
}
