# Learning React Day - 1.

# Tools which we are using in this journey.

1. Chrome / Mozilla firefox
2. VS Code
3. VS Code Extentions:
	    i) Better Commenets.
       ii) Brackets Pair Colorization Toggler
      iii) ES7+ React/Redus/React-Native
       iv) GitLens-Git supercharged (if you are good in git/github then use this extention else try to write mannual code to push pull requests)
        v) Prettier - Code formatter
       vi) VS Code icons 
      vii) VS Code Emmet

Q1. Difference between a Framework and a Liberary ?

Q2. React is a liberary or a framework? 

Q3. What is VS Code Emmet, Boilercode?


# Let's deep dive into the course....

Creating our first webpage....

first of all we are creating webpage into basic html...

# display Hello World using basic html
```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
	</html>
```

# Now if i'll tell you to do the same thing using javascript can u able to do this??

if yes then do it....
let suppose there is a root named div in your webpage and you want to add a element inside the root....

inshort create wap to display namaste react in the web page using javascript only.

Steps: 
	We can do this using DOM manipulation

1. We need to create eleement.
2. Add content to the created element.
3. Append child where you want to add the element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container">

    </div>
    <script>
		const heading = document.createElement("h1");
		const root = document.getElementById("container");
		heading.textContent = "Hello World";
		root.appendChild(heading);
	</script>
</body>
</html>
```

Q4. How the browser get to know about create element, append child and all?

ans. Thats come from browser API, browser knows what is documnet, window, its know what is happeneing inside your browser.
Browser has a JS Engine, JS Engine gives this functionality to perform all this.


Now let's see how we can to the same stuff using REACT. 


We can inject React in our code with bare minimum things...

For this we need to set-up few things... from now we are using React CDN to run React in our project later we install it in our local...

So, lets talk about React CDN

Q5. What is CDN? Whai is the use case of CDN? Why we use this? Read about CDN !

Injecting 2 CDN currently to run react.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container"></div>
	<!-- Firstly import the CDN links of React and React DOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
		// Creating react element 
		const heading = React.createElement("h1", {
		    id:"title",
		},"Heading 1");
		// Setting the root
		const root = ReactDOM.createRoot(document.getElementById("container"));
		// Rendering all the elements in the root
		root.render(heading);
	</script>
</body>
</html>
```
* First CDN gives us React(as a global object)
* Second CDN gives us React-DOM(this is for React DOM manipulation)

### Let's clear one thing first React is nothing it is just a liberary of Javascript.

if you open the cdn u get to know that all the thing is written in plane js... so dont create much hype that REACT---REACT, it is just a pieces of javascipt, which are created by FACEBOOK developers and it is similar to jQuery

So, don't panic...

Q6. What is Cross-origin? Learn about CORS (cross-origin)

Q7. What is the shortest program of JS?
Ans. An empty file of js attached in html using script tag.


Q8. What is the shortest program of REACT?

Ans. When we attach CDN to our html page then we can consider it as the shortest program of react.
(run and check the dev tool search React there you get a whole object of react).

Just inject cdn to your index.html or the entry point of your webpage that will become the shortest prog. of REACT.


Let's go create elements, push elements into react.

Function which is used.
1. React.createElement("", {}, "");

it takes 3 parameter,
* First is from tag name, enter the name of tag which you want to create like h1, p etc pass in the string

* Second takes an object which we discuss later.

* Third takes content of element.

example.
const heading = React.createElement("h1", {}, "This is a Heading");

this is similar to...
```html
<h1>This is a Heading</h1>
```
Now if we want to push it in a div called root.

then we need to create an element to assign root element

so, create a root.
```javascript
const root = ReactDOM.createRoot(documet.getElementById("root"));

reactDOM.createRoot() //tells that whatever you pass in side the function it will become the root element
/*
and everything you are creating or created,everything is rendered inside the root
Here we are using ReactDOM because we are trying to manipulate the DOM

Now we want to put our heading to the root so we need to use render, it will render the our heading inside the root. */
root.render(heading);
//React API's is very easy you can easily understand all api's by seeing their name.
```

Now move ahead.
Q7. What is {} inside React.createElement("", {}, ""); ?

Ans. It is called 'Props', this is the object use to give props to the element.

```javascript
const heading = React.createElement("h1", {
	id: "title",
}, "This is a heading");

console.log(heading) // <- check int the console.

// it is similar as

<h1 id = "title">This is a Heading</h1>
```
Q8. If we have multiple elements inside the root so when we render new element inside the root then it will add indide the list or it  will overwrite all the things??

Ans. It will overwrite all the things go and check by doing practical.


The standard way taht is followed by the professional is they enter a 'Not Rendered' value or they create an element and add content 'Not Rendered' to the element.

this is only for checking that you have rendered anything is working or not, if there is some error...then it will display not rendered which means our root is not configured, or react is not able to do his task this is a smart way used by professionals
{
Professionals jo v root tag hota h uske undr ek element jisme value "Not Rendered" bana kr dal dete hai... jisse ye pata lag jata hai ki hm jo v chiz root me render kiye hai wo successfully work kr rha hai ya ni... agr not rendered hi display ho rha it means ki jo v kuch render krna chah rhe wo thk se render ni huwa h 
}


If im doing everything correctly then all the things("Not rendered") is overwrite by the things which is passed inside render.


Understand the flow why this is needed??

When u refresh/reload your page continouslly then u get a millisecond lag.

It(Code parser) take some millisecond time to render all the things...

We can't avoid it we can optimise it 

so thats why we need to understand the flow...

So always the parsing begin from the start that is from the html, head, body like this....

try to change the script place, you get error why??????

because we are currently injecting react using CDN so it takes some time to get react from the CDN...

so if you paste all the code above the CDN then think it is possible to use react without injecting..?

No, right... so try to change of the script and try to figure out the problem...

Q8. Read about async and defer ? how the parsing work internally ?

--------------------------------------------------------------
# Nesting of multiple elements(We call him children in react) in a container like this...
```html
<div id = "container">
	<h1 id="title">Heading 1</h1>
	<h2 id="title">Heading 1</h2>
</div>
```
so to nest the elements first of all we need to create a container first and then create the elements then add all the elements there after that render that container to the root.

```javascript
let's see the code. 

//Creating the elemenets
const heading1 = React.createElement("h1", {
	id: "title",
}, "Heading 1");

const heading2 = React.createElement("h2", {
	id: "title",
}, "Heading 2");

// Creating the container
const container = React.createElement("div", {
	id:"container"
},
[heading1, heading2]);
```

so for nesting we need to pass all elements(Childrens) inside an array. we can add as much childrens we can to add

so the .createElement("", {}, "") has two form:

For creating single element like this
```html
<h1>Hii</h1>
```
we need to use third argument like this "Add Content" 
```javascript
const heading1 = React.createElement("h1", {
	id: "title",
}, "Heading 1");
```
and for nesting elements like this 
```html
<div id = "container">
	<h1 id="title">Heading 1</h1>
	<h2 id="title">Heading 1</h2>
</div>
```
we need to pass all elements(childrens) inside an array
```javascript
const container = React.createElement("div", {
	id:"container"
},
[heading1, heading2]);

//Now add the container inside the root

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
```

if you getting error in console that use unique keys and all....then wait when you learn about 'props' then you get to know that in react you need to pass a unique key to uniquely identify the element by the DOM for virtual DOM Tree... you'll learn it later hold on !!
 

How CDN Work....

# IMPORTANT POINTS.
* React can exists withour typescripe, redux, jsx etc.
* At the end React elements are bascially normal java script objects.

go and write this in devTool console.
```javascript
console.log(heading);
```
you get a js object


* jsx is noting just a js object.

* We can simply use React, just inject the CDN and use.

* We can use simple JS in the react code.

* Create 1 root in you project it is the standard approach.

-----------------------------------------------------------
If you have some ques like ?

What is DOM?
Ans. Document object model.

Q.Why we create Root? can we have multiple root in a single project?

Ans. reactDOM.createRoot() tells that whatever you pass in side the function it will become the root element

and everything you are creating or created, everything is rendered inside the root

why do we need to create root?
it is just because react will need to know where you want to put all the stuffs.

Can we have multiple root inside a project?

In every project there is only one root and one render method.
We put/build all the thing inside the created root only.

generally we have only one root.

What is ReactDOM?
Ans. ReactDOM is responsible for all the dom manipulation using react.


just go and search on the internet

Why react is a great liberary ? 
Ans. So, when we create our whole project by using html,css,js its become huge.

But in react we can segregate our react code, 

Now questions arrises that if you want to create a big project then it is easy to
code like this or very complicated ?
because everytime if we want to create an element,
we need to write this line of code to create an element
```javascript
const heading1 = React.createElement("element name", {
	id: "title",
}, "Element content");
```
so this is very complicated to create large production level project in this style.

So, for that react came with a idea where you can write whole html, css inside javascript
so you don't have to to your html, css file to update their just do all the things inside the js and this is known as 'JSX'.
to avoid this ugly <b>style(react.createElement())</b> of writing react codes React JSX comes in the scene.

But everyone says that react has only jsx this is completely wrong, in the initial phase of react all project is developed using 
this ugly style like create elemene, create root, add then render....this traditional style is followed in the initial phase of react and this is the core of React.

You can write all the code in the html file or seperate it in different form like js code in js file, similarly css in css file and 
and attach all in the html file.(this is not react thing this is basic javascript things)


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Theory Assignments:
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is Emmet?
	Emmet is a plug in for many popular text editors which greatly improves HTML, CSS, java, c++ and etc workflows
	you can use short expressions to generate HTML markup, CSS ans etc.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● Difference between a Library and Framework?
	Both libraries and software frameworks are just a collection of reusable code written by others. Their goal is to make ordinary problems easier to address.
	To show the distinction between these concepts, we can use a cottage as a metaphor. A library is similar to building a cottage from the ground up.
	You may design your house as you want, with just about any architecture you want, and you can arrange your rooms however you want. 
	Framework, on the other hand, is like buying a new cottage. You don’t have to deal with construction issues, but you can’t pick how to arrange your areas because the cottage is already completed.

  Liberary
	A library is a collection of prewritten, tested code that streamlines software development. It supports developers and compilers by automating functions, and it implements numerous functions, variables, and parameters.
	A library is an extra module a programmer requests through an API (Application Programming Interface). Libraries are often called component or class libraries. 
	They contain public functions accessible to programs and private functions that remain hidden.

  Advantages of a Library
	Let's look at some benefits of using a programming library: 

	1. Enhances program performance by allowing the compiler to include it selectively during runtime.

	2. Offers reusable functions referenced in the code without explicit definitions, suitable for various environments and use cases.

	3. Eliminates the need to write code for complex functions.

	4. Saves time by avoiding repetitive coding for the same problems.

	5. Focuses only on the specific feature the library implements; global state management, such as HTTP and routing, is not required. 

	6. Allows you to choose your preferred library and create configurable and reusable libraries.

	7. Lowers application development costs.

  What Are the Limitations of a Library? 
	Using a library entails a code dependency on that specific library. Switching to a different library may require code modifications to integrate the new library effectively.
	If you introduce a library into an unsupported environment, it requires the creation of a wrapper.This could affect the application's performance.
	Utilizing multiple libraries may negatively affect application performance due to dependency conflicts. Programming libraries are also susceptible to malicious attacks.

  Framework
	A framework is a base for building software. It provides a pre-made structure to save you from starting from scratch. As a developer, you get an outline of how a software application should operate.
	A framework consists of reusable code components designed for common tasks. The coding framework incorporates custom code from developers for unique functions.
	It offers both predefined and customizable objects and functions that you can use to build applications. This allows you to enhance system functionality by plugging in existing code.
	Frameworks combine resources such as images and reference documents into a unified package. You can then adapt it to specific project needs. This flexibility enables you to do the following: 
		Introduce new features.
		Enhance the capabilities of an application seamlessly.
	The four main types of frameworks are deductive, inductive, abductive, and mixed. 

  What Are the Advantages of a Framework? 
	The main advantages of a framework are as follows: 

	1. Helps you save time and effort. 

	2. Gives you a simple coding blueprint to follow. 
	
	3. Allows you to concentrate on tasks unique to your project. 
	
	4. Produces neat and flexible code.
	
	5. This is possible because a framework keeps changes in one part of the application from impacting the whole application.
	   The applications you developed on frameworks work on many platforms. Frameworks also include caching and streamlined network processes for faster performance.
	   This speeds up the web development process with less code and lets you focus on user experience by creating dynamic and engaging content.
	   To achieve this, JavaScript frameworks like Angular, for instance, use MVC and data binding.

  Disadvantages of Framework
	Here are some disadvantages of using a framework: 

	Frameworks frequently come with a challenging learning curve. This raises development expenses, especially if you're new.

	They may limit your ability to customize your design.

	Application development can become complicated when using a framework.

	It is difficult to separate business logic from the presentation layer in MVC (model-view-controller). 

	It requires you to stay up-to-date with its latest versions.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is CDN? Why do we use it?
    
	CDN stands for Content Delivery Network. It is a system of distributed servers that work together to deliver web content, such as images, videos, stylesheets, and scripts, to users based on their geographical location.
	The main purpose of using a CDN is to improve the performance, reliability, and scalability of web applications and websites.

	The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.
    A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

  What are the use case of using a CDN?
	Here are some key reasons why CDNs are used:
	1. Faster Content Delivery: CDNs store copies of static assets (like images and scripts) on servers distributed across various locations. When a user requests a particular piece of content, the CDN serves it from the server that is geographically closest to the user. 
	   This reduces latency and results in faster content delivery.

	2. Load Balancing: CDNs distribute incoming web traffic across multiple servers, ensuring that no single server is overloaded. This helps in load balancing and ensures optimal performance and availability.

	3. Scalability: CDNs can easily scale to handle increased traffic and demand. As the number of users accessing a website grows, the CDN can dynamically allocate resources and replicate content to additional servers as needed.

	4. Reliability and Redundancy: CDNs enhance the reliability of a website by providing redundancy. If one server in the CDN network fails, other servers can seamlessly take over, ensuring continuous content delivery.

	5. Security: Some CDNs offer security features, such as DDoS protection, to safeguard websites from malicious attacks. By distributing the traffic across multiple servers, CDNs can help mitigate the impact of DDoS attacks.

	6. Bandwidth Savings: CDNs can reduce the load on the origin server by serving cached content from their distributed servers. This results in lower bandwidth usage and operational cost savings for the website owner.

	7. Improved User Experience: Faster load times and a more reliable user experience contribute to increased user satisfaction. Users are more likely to stay on a website that loads quickly and consistently.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● Why is React known as React?
	React, the JavaScript library for building user interfaces, was developed by Facebook. It was initially released as an open-source project in 2013. The name "React" was chosen to reflect the core philosophy of the library,
	which is to provide a reactive approach to building user interfaces. The term "reactive" in this context refers to the way React handles updates and changes in the user interface.
	Instead of manually manipulating the Document Object Model (DOM) to update the UI when data changes, React allows developers to declare the desired UI state, and it automatically updates the DOM to match that state.
	This reactive paradigm simplifies the process of building complex user interfaces by providing a more declarative and efficient way to manage the UI.
    
	The name "React" underscores the library's focus on reacting to changes in data and efficiently updating the UI in response.
	It has become widely popular in the web development community for its simplicity, modularity, and the ability to build interactive and dynamic user interfaces with ease.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is crossorigin in script tag?


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is diference between React and ReactDOM
  
  React:
    
	React is the core library for building user interfaces using a component-based architecture. It provides the tools and mechanisms for creating reusable components, managing component state, and handling the rendering of UI elements.
	Usage: Developers use React to define and create components, manage state, handle user input, and manage the overall structure of their applications.

  ReactDOM:
	ReactDOM is a specific package that serves as the glue between React and the DOM (Document Object Model). It contains methods for rendering React components to the DOM, updating the DOM in response to changes in component state, and handling events.
	Usage: Developers use ReactDOM to take React components and render them into the actual DOM. It provides methods like ReactDOM.render() to mount a React component into the DOM, and ReactDOM.hydrate() for server-side rendering.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is difference between react.development.js and react.production.js files via CDN?
  	The differences between the development and production versions of React, as served via CDN, lie in the optimizations applied to the code to enhance performance and aid debugging.
  	The development version (react.development.js) is intended for use during development and debugging, while the production version (react.production.js) is optimized for deployment in production environments.
  
  Here are the main differences:
	Code Size:
		Development: The development version is larger in size because it includes extra warning messages, debugging information, and comments. This helps developers identify and fix issues more easily during development.
		Production: The production version is minified and stripped of comments and unnecessary whitespace to reduce its size. Smaller file sizes lead to faster downloads and improved website performance.
	Error Messages:
		Development: The development version provides more informative error messages, including details about the source code, making it easier for developers to identify and fix issues.
		Production: The production version includes optimized error messages that are concise and minified, helping to keep the file size small. However, these messages may be less helpful for developers during debugging.
	Performance:
		Development: The development version may have additional checks and features to aid in development but may be slower due to the added debugging information.
		Production: The production version is optimized for performance, with unnecessary checks and features removed. This results in faster execution and better runtime performance.
		
	When using React in a production environment, it is recommended to use the production version to ensure optimal performance. 
	During development, it's common to use the development version to take advantage of helpful warnings and error messages that aid in debugging. 
	Switching between these versions is often managed automatically by build tools or bundlers based on the environment (development vs. production).

	Example Scenario:
		Development: You're building a car (your website) in a garage. You want all the tools and instructions around to help you during the process.
		
		Production: Once the car is ready and needs to be driven on the road (public internet), you remove unnecessary tools and make it as streamlined as possible for optimal performance.
		
		In practical terms, when setting up a React project, you might use the development version during development and switch to the production version when preparing to launch your website or application to the public. 
		This ensures that your users get a faster and more efficient experience. The specifics of how you switch between these versions depend on your project setup and tools you're using.

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● What is async and defer?
  	Async and defer are boolean attribute use to load script tag efficiently into our web page.

  After loading a webpage there are major 2 things happening in our browser, that is 
	1. HTML parsing
	2. Loading of the script.
  And furthere 'Loading of script' is divided into to components that is 
		2.1 Fetching the script from network.
		2.2 Actually executing script line by line.






xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

● Learn about Arrow Functions


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx