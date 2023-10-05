# react-find-first-text

A React utility library to find the first text element within a component or element hierarchy.

## Installation

You can install this package using npm or yarn. Since it has peer dependencies on React and ReactDOM, make sure you have them installed in your project as well.

Using npm:

```sh
npm install react-find-first-text react react-dom
```

Using yarn:

```sh
yarn add react-find-first-text react react-dom
```

## Usage

Import the library and use it within your React components:

```jsx
import findFirstText from 'react-find-first-text';

// Your React component
const MyComponent = () => {
  const firstText = findFirstText(
    <div>
      <span>Hello</span> <p>World</p>
    </div>
  );

  return <div>First text found: {firstText}</div>;
};
```

**Note:** The actual usage might differ. Please check the source code or examples provided by the library for accurate usage.

## Development

### Building the Project

To build the project, run the following command:

```sh
npm run build
```

or

```sh
yarn build
```

### Running Tests

To run the tests, use the following command:

```sh
npm test
```

or

```sh
yarn test
```

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Contributing

Please read through our contributing guidelines. Included are directions for opening issues, coding standards, and notes on development.

## Acknowledgements

This project is maintained by [luxo-ai](https://github.com/luxo-ai).
