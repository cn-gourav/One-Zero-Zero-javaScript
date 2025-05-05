 # Scratch Effect

An interactive web application that creates a unique scratch effect as users move their mouse across the screen. The effect reveals an image through circular cutouts that follow the mouse movement, creating an engaging and dynamic user experience.

## Features

- Interactive mouse-following scratch effect
- Circular cutout reveals
- Dynamic image reveal
- Smooth animation
- Automatic cleanup of scratch elements
- Responsive design
- Clean and minimal implementation

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## Project Structure

```
Scratch-Effect/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── app.js          # Scratch effect functionality
└── 1.jpeg          # Background image
```

## How It Works

The application creates a unique scratch effect through these mechanisms:

1. **Mouse Tracking**:
   - Tracks mouse movement across the screen
   - Creates circular cutouts at mouse position
   - Maintains smooth following behavior

2. **Scratch Effect**:
   - Creates circular elements that follow the cursor
   - Reveals the background image through the circles
   - Creates a scratch-off lottery ticket effect

3. **Element Management**:
   - Automatically removes scratch elements after 7 seconds
   - Prevents memory overflow
   - Maintains smooth performance

## Setup and Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Move your mouse across the screen to create the scratch effect
4. Watch as the image is revealed through the scratch circles

## Customization

You can customize the application by:
- Changing the background image in `style.css`
- Adjusting the circle size and shape
- Modifying the scratch effect duration
- Changing the reveal image
- Adjusting the animation timing
- Adding additional effects

## Browser Support

This project works on all modern browsers that support:
- ES6 JavaScript
- CSS3
- HTML5
- Mouse event handling

## Performance Considerations

- Efficient element cleanup
- Optimized event handling
- Minimal DOM manipulation
- Automatic garbage collection
- Memory management through element removal

## License

This project is open source and available for personal and commercial use.