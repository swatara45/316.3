Part 1: Getting Started
Take a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.
Progress Check - Here is what the page should look before beginning this lab:

Part 2: Adding Additional HTML and CSS
One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.
In order to facilitate this, add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element, as follows:
"<header>
	<nav id=""top-menu""></nav>
	<!-- Add the <nav> element below -->
	<nav id=""sub-menu""></nav>
</header>"

Other than this change, do not modify index.html in any way.
Secondly, add the following to the styles.css file:
"header, #top-menu {
	position: relative;
}
#top-menu {
	z-index: 20;
}
#sub-menu {
	width: 100%;
	z-index: 10;
	transition: top 0.5s ease-out;
}
#sub-menu a:hover {
	background-color: var(--top-menu-bg);
}
nav a.active {
	background-color: var(--sub-menu-bg);
	color: var(--main-bg);
}"

Other than this change, do not modify styles.css in any way.

Part 3: Creating the Submenu
A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
All future steps should be completed within the index.js file.
Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
Set the height subMenuEl element to be "100%".
Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
Add the class of flex-around to the subMenuEl element.
Throughout this process, note that you are also becoming accustomed to another important skill: working with another developer's code. Many of these variables, elements, CSS classes, and other features have already been developed, and you are simply working with them for your own purposes.
Progress Check - Here is what the page should look like so far:
Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
Set the CSS position property of subMenuEl to the value of absolute.
Set the CSS top property of subMenuEl to the value of 0.

Part 4: Adding Menu Interaction
In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following:
"var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];"

In order to add interaction:
Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.
Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.
Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
Hint: Removing a non-existent class from an element does not cause an error!
Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. Here is what it should look like so far, with "CATALOG" active:
