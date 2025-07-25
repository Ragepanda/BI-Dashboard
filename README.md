# BI-Dashboard
An example of a dashboard that offers a means of tracking lab samples over time. 

### Technologies

React
TypeScript
Prettier/ESLint
Shadcn content library
Tailwind


### Methodology

I used create-react-app with typescript as a modification to get the basic boilerplate of the app set up. 

I then moved on to setting up ESLint and Prettier on the project for consistent styling

I then set up React-router to ensure that the app would have the routing it needed and that any routing on the URL would just lead back to the home page

With the basics set up, I asked ChatGPT to create a color palette based on a screenshot of a QBench demo screenshot. It helped me provision the color palette found in the tailwind.config.js folder. I also added space tokens (xs, sm, md, lg) into my tailwind configuration in order to use tokenized spacing. 

I asked ChatGPT to give me some boilerplate to work with on setting up the Samples Page. It decided to give me the basic structure of a table, which I liked and modified slightly. The table gives a breakdown of all the lab data. I added some scroll overflow, put it into a Card and centered it to make it look better.

Before I could put it into a Card, I had to import the reusable card component from the Shadcn component library. I set up the secondary ShadCN settings, including the components.json file. I would end up using similar reusable components to derive my button, card,chart, popover and DateRangePicker components.

I created a pair of cards and was able to format the sample data I was using for each of the visualizations I put into the cards. I added helper functions, static typings and other useful exports in the SamplesPageUtils.tsx file. 

Once the Bar Chart and Pie Chart visualizations from ShadCN were cleanly in place and formatted, I found that I was verging on 6 hours, so I decided to stop. 


### Work left unfinished

The UI still looks a bit rough, the data visualizations row could either be adjusted to be bigger for each card or a third visualization. I tried to go for more substantive items on the list first before going for styling. I was able to at least arrange everything via flex box to flow properly. 

I managed to get a Date Picker component standing, but didn't have enough time to get it logically hooked up to the chart. I used ChatGPT to help me formulate a custom Date Range Picker since ShadCN did not have one. In hindsight I should have found a custom one to serve my needs, but I tried a time friendly approach. I was in the process of trying to set the max/min ranges of the range picker based on the sample data. A helper function to extract these dates in located in the SamplesPageUtils.tsx file. 

I wasn't able to set up the Jest Suite tests. I wanted to do a basic components checking test to see if some of my components could be scanned by Jest and then I was going to have it run a screenshot test that would have dumped the screenshot in a nearby file for examination. 

