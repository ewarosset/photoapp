import {fireEvent, getByAltText, render, screen} from '@testing-library/react';
import App from './App';
import {imageUrls} from "./PhotoViewer/getImages"
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import renderer from 'react-test-renderer';


test('check heading is included', () =>{
  render(<App />);
  const heading = screen.getByText(/React Photo Viewer/)
  expect(heading).toBeInTheDocument();
})


test('test image url generation are not null', () => {
  expect(imageUrls).not.toBeNull();
});

test('test image url generation contains random image', () => {
  expect(imageUrls).toContain("https://picsum.photos/id/603/1600/900.jpg");
});


test('set Image function changes the image', () =>{

  render(<PhotoViewer />);

  fireEvent.click(screen.getByAltText('https://picsum.photos/id/602/1600/900.jpg'));

  const image = screen.getByAltText('mainPic');

  expect(image).toHaveAttribute('src', 'https://picsum.photos/id/602/1600/900.jpg')

})


test('Ensure PhotoViewer is the same', () => {
  const tree = renderer
      .create(<PhotoViewer />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});

