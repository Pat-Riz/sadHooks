# sadHooks


# SOLUTION. Don't be a moron.
SyntaxError at  render(RNcomponent());
Don't call a React Function component. If you instead do render(<RNComponent/>) everything works. Unfortunally even with a FC everything
worked fine while rendering a <Text> and <Button> inside the FC. Only when you added hooks things got f¤cked

Simple repo for replicating the error.
All I've done is 
 Setup expo
  - expo init sadHooks
  - Created blank typescript template
  
 Setup jest according to "https://docs.expo.dev/guides/testing-with-jest/"
  - yarn add jest-expo --dev
  - yarn add react-test-renderer@16.13.1 --dev     (latest react-test-renderer uses react 17) 
  - yarn add @types/react-test-renderer@16.13.1 --dev   (not sure if needed)
  - yarn add --dev @testing-library/react-native   
  - yarn add  @types/jest@26.0.24 --dev     
  
 Created sadHooks.test.tsx where i try to render a simple FunctionComponent with a useState hook.

Error when running test.
 FAIL  src/sadHooks.test.tsx
  × RN render correctly (5 ms)

  ● RN render correctly

    Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.

       6 |
       7 | const RNcomponent = () => {
    >  8 |   const [someValue, setSomeValue] = useState<string>("default");
         |                                     ^
       9 |   return (
      10 |     <View>
      11 |       <TextInput

      at resolveDispatcher (node_modules/react/cjs/react.development.js:1465:13)
      at useState (node_modules/react/cjs/react.development.js:1496:20)
      at RNcomponent (src/sadHooks.test.tsx:8:37)
      at _callee$ (src/sadHooks.test.tsx:23:5)
      at tryCatch (node_modules/regenerator-runtime/runtime.js:63:40)
      at Generator.invoke [as _invoke] (node_modules/regenerator-runtime/runtime.js:294:22)
      at Generator.next (node_modules/regenerator-runtime/runtime.js:119:21)
      at tryCatch (node_modules/regenerator-runtime/runtime.js:63:40)
      at invoke (node_modules/regenerator-runtime/runtime.js:155:20)
      at node_modules/regenerator-runtime/runtime.js:190:11
