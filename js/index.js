const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2018",
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent.nav["img-src"]);

// Images
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent.cta["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Navigation
const navItems = document.querySelectorAll(".container header nav a");
console.log(navItems);
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

// Changing the Nav to Green
navItems.forEach((item) => {
	item.style.color = "green";
});

// Adding new elements
const navContainer = document.querySelector(".container header nav");
const newNavItem1 = document.createElement("a");
const newNavItem2 = document.createElement("a");
newNavItem1.textContent = "Home";
newNavItem2.textContent = "Invest";
newNavItem1.style.color = "green";
newNavItem2.style.color = "green";
navContainer.prepend(newNavItem1);
navContainer.appendChild(newNavItem2);

// Header
const h1 = document.querySelector("h1");
console.log(h1);
h1.innerHTML = "DOM <br> Is <br> Awesome";

const headerBtn = document.querySelector(".cta-text button");
headerBtn.textContent = siteContent.cta.button;

// Main Content Top
const topH4 = document.querySelectorAll(".top-content .text-content h4");
console.log(topH4);
topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];

const topP = document.querySelectorAll(".top-content .text-content p");
console.log(topP);
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

// Main Content Bottom
const bottomH4 = document.querySelectorAll(".bottom-content .text-content h4");
console.log(bottomH4);
bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomP = document.querySelectorAll(".bottom-content .text-content p");
bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// Footer
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent.footer.copyright;

// Stretch Goals
// Styling using styles
h1.style.color = "#4BC3DE";

const headerBtnOnHover = document.querySelector(".cta .cta-text button");
console.log(headerBtnOnHover);

// adding CSS and manipulating class of element
// headerBtnOnHover.classList.add("funky");
// headerBtnOnHover.style.background = "#4BC3DE";

// alternative using onMouseOver and onMouseOut
headerBtnOnHover.setAttribute("onMouseOver", "this.style.background='#4BC3DE'");
headerBtnOnHover.setAttribute("onMouseOut", "this.style.background='none'");

// center contact elements
const contact = document.querySelector(".contact");
contact.style.textAlign = "center";

// creating callback function to use on eventListener
function btnAlert() {
	alert(`Hey, the button works! I guess that's a stretch!`);
}
// adding eventListener
headerBtn.setAttribute("onClick", "btnAlert()");
