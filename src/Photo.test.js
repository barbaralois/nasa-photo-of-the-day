import React from 'react';
import Photo from './Photo';
import renderer from 'react-test-renderer';

it('renders correctly when there are no items', () => {
  const tree = renderer
    .create(
      <Photo
      // imgSrc={photo.hdurl}
      // date={photo.date}
      // key={index}
      // index={index}
      // setAPOD={props.setAPOD}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with props', () => {
  const testURL = 'www.google.com';
  const testDate = '5-15';
  const testKey = 5;
  const testIndex = 5;
  const setter = 'a function';
  const tree = renderer
    .create(
      <Photo
        imgSrc={testURL}
        date={testDate}
        key={testKey}
        index={testIndex}
        setAPOD={setter}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
