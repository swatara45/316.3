//Part 1
let mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)"

//Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

//Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');


//Part 2
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById(`top-menu`);
console.log(topMenuEl);
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Part 3
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link)=>{
 // Create an <a> element.
let newLink = document.createElement('a')

// On the new element, add an href attribute with its value set to the href property of the "link" object.
newLink.setAttribute('href', link.href)

// Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text

// Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)
})

//Part 3
//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');
console.log(subMenuEl);

//Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

//Part 4

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

// 2. Attach a delegated 'click' event listener to topMenuEl.
  // - The first line of code of the event listener function should call the event object's preventDefault() method.
  // - The second line of code of the function should immediately return if the element clicked was not an <a> element.
  // - Log the content of the <a> to verify the handler is working.
  const topMenuLinks = topMenuEl.querySelectorAll('a');
  topMenuEl.addEventListener('click', function(event) {
    // - Prevent the default behavior of the <a> element (i.e., the navigation)
    event.preventDefault();
  
    // -  Return if the element clicked was not an <a> element
    if (event.target.tagName !== 'A')  return;
    ///////
    // Get the clicked link text to find the corresponding "link" object
    const clickedLinkText = event.target.textContent.toLowerCase();
  
    // Find the corresponding "link" object in menuLinks
    const clickedLinkObj = menuLinks.find(link => link.text === clickedLinkText);
  
  
  
  
  
    // Log the content of the clicked <a> element
    // console.log(event.target.textContent);
  
  // Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    
  // 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    // Hide the submenu if the active class is removed
    subMenuEl.style.top = '0';
  } else {
    // 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    topMenuLinks.forEach(link => link.classList.remove('active'));
  
  
    // 4. Update the contents of mainEl with an <h1> element containing the clicked submenu item's text
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    
    // Add 'active' class to the clicked link
    event.target.classList.add('active');
    // Toggle submenu visibility based on the existence of subLinks in the clicked link object
    if (clickedLinkObj && clickedLinkObj.subLinks) {
      // Set the CSS top property to 100% to show the submenu
      subMenuEl.style.top = '100%';
  
     // Call buildSubmenu to dynamically populate the submenu
      buildSubmenu(clickedLinkObj.subLinks);
  
  } else {
              // Hide the submenu if there are no subLinks (for example, for the "ABOUT" link)
              subMenuEl.style.top = '0';
              // 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
              if (clickedLinkText === 'about') {
                mainEl.innerHTML = '<h1>About</h1>';
            }
          }
        }
  
    // Log the content of the clicked <a> to verify the handler is working
    console.log(event.target.textContent);
  });
  
  // The submenu needs to be dynamic based on the clicked link. 
  // To facilitate that, we will create a helper function called buildSubmenu that does the following:
  
  function buildSubmenu(subLinks) { 
    // 1. Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = '';
    // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
    
    subLinks.forEach(link => {
      // a. Create a new <a> element
      const newLinkEl = document.createElement('a');
      
      // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      newLinkEl.setAttribute('href', link.href);
      
      // c. Set the element's content to the value of the text property of the "link" object.
      newLinkEl.textContent = link.text;
      
      // d. Append the new element to the subMenuEl.
      subMenuEl.appendChild(newLinkEl);
  });
  
  };
