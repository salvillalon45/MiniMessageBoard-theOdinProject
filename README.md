# theOdinProject-MiniMessageBoard

[The Odin Project: Node] - Project: Mini Message Board

## Intro

-   In this project we are introduced to Express.js and make our first application using it!
-   You can find more on the project here: [The Odin Project - Mini Message Board](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/mini-message-board)

### 🎨 Color Reference

|  Color            |  Hex                                                                 |
| ----------------- | -------------------------------------------------------------------- |
|  Gold             |  ![#FFD700](https://via.placeholder.com/10/FFD700?text=+) `#FFD700`  |
|  Black            |  ![#141720](https://via.placeholder.com/10/141720?text=+) `#141720`  |
|  White            |  ![#fff](https://via.placeholder.com/10/fff?text=+) `#fff`           |

## Development

-   I learned how to apply a favicon in an express app. It involves using the serve-favicon npm package
-   I learned how to use Sass in an expres app. I noticed that I did initialized with the generator the sass flag (--css=sass), but I noticed that it was not applying the changes I was making to my sass file. So to fix, in app.js I changed the indentedSyntax to false and change the file extension of my .sass file to .scss. Code below
-   ```
    app.use(
    	sassMiddleware({
    		src: path.join(__dirname, 'public'),
    		dest: path.join(__dirname, 'public'),
    		indentedSyntax: false, // true = .sass and false = .scss
    		sourceMap: true
    	})
    );
    ```

## Technologies:

-   Sass
-   Node
-   Nodemon
-   Heroku
-   Express

```

```
