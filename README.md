### What requirements did you achieve?

I believe I have achieved all of the standard requirements and a couple of the stretch goals.

### Were there any requirements or goals that you were unable to achieve?

I did look into the stretch goal of adding a like button to the reviews, but I feel I wouldn't have had enough time to implement this.

### If so, what was it that you found difficult about these tasks?

I was just limited on time to be able to implement every single one of the stretch goals. Some of the ideas that I had but could not implement (see below) took a long time to try and configure before I gave up with them.

## **Additional reflections:**

### What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

- MDN
- CSS-Tricks (grid layout)
- W3Schools

### What errors or bugs did you encounter while completing your assignment? How did you solve them?

After I had initially set up my server, client and database, I got stuck for a really long time on not being able to send my submitted form data to my database. Bertie went through lots of different things with me, and thankfully identified that it was a syntax error in the end. I had accidentally added an extra pair of brackets in the POST request of my server.js file.

I had another issue with wrangling the correct data from my server, as the data array that I wanted was inside an object called rows, which was nested into an object named apiData which was nested in another object called apiData. I initially had to console log everything to try and wrangle the specific data set that I wanted, which I could then use for my for loop.

### What went really well and what could have gone better?

One of the things I'm not really sure about is why the reviews from the database take so long to load on the page. I'm not sure if it's maybe just my laptop or internet connection being slow, or it will do that for everyone. It took as long as 10 seconds to load one time.

I wanted to try and add something to the date visited input where you cannot put future dates in, it can only be up to the current date or previous dates. I tried using the max property and obtained the current date from JavaScript but it was still submitting the form if I had entered a future date.

I originally wanted to display the reviews in a carousel format so that it only showed one review at a time and I could set a timer so that it displayed another review in a set amount of time. I thought I would be able to do this, but sadly I think this was a bit too ambitious for me (since I couldn't do it before with my image gallery). I tried to follow the instructions on W3Schools (https://www.w3schools.com/howto/howto_js_slideshow.asp), but got stuck with the JavaScript and how to implement this into my function. Instead, I decided to just display the 6 most recent reviews. Maybe at some point, I can figure out how to make a "See all" button to display all reviews or a maximum number at a time.

I watched a couple of youtube videos on how to make a dropdown menu, as I ideally would have liked to have had the header navigation links as a menu that can expand to show the links on mobile view. I couldn't implement this in the end, so have just left it as is.

I will have to make a note of these things and see if I can try and learn how to do these in my own time (such as during the holidays or after the bootcamp).
