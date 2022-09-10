var h1 = document.createElement('h1');
var text = document.createTextNode("Functional Requirements");
h1.appendChild(text);

var ul1 = document.createElement('ul');

//Array for Functional Requirements		
var fun = ['The home page should contain the information about our AI-based lawyer.',
			'The home page should contain a button for Registration/Login.',
			'The clients will first need to create an account.',
			'The system must allow users to log into their account by entering their email and password.',
			'The system must allow users to log in with their Google accounts.',
			'When a user creates an account, the system should send an approval request.',
			'The system must allow users to reset their password by clicking on "I forgot my password" and receiving a link to their verified email address.',
			'The background color for all windows in the application will be blue and have a hexadecimal RGB color value of 0x0000FF.',
			'The system would process textual queries.',
			'The system would listen to the problem of clients and answer them accordingly with citations to the PPC (Pakistan Penal Code) and Constitution.',
			'The previous chat between client & AI-based lawyer will remain saved in database.',
			'The server should automatically back up the database every 24 hours.',
			'The system should allow only managers to access a user’s personal data.',
			'The system should shut down in the event of a hacker attack.',
			'The transactions for receiving consultation will be online.',
			'There must be an option for one consultancy free trial.',
			'The checkout securely processes credit cards from all major vendors.',
			'The system must allow the user to submit feedback through a feedback form.',
			'The footer of home page must contain the contact information.',
			'In the footer, when user clicks on the email, it should take them to an e-mail client where they can send an email.']
var h2 = document.createElement('h1');
var text = document.createTextNode("Non-functional Requirements");
h2.appendChild(text);

var ul2 = document.createElement('ul');

//Array for Non-Functional Requirements
var nfun = ['Interface is compatible for various devices.',
			'The system can chat in multiple languages e.g., English, Urdu, Punjabi, Sindhi, Pushto.',
			'The system would not grant access until the user creates a strong password.',
			'A strong password would contain more than 7 characters and a capital letter.',
			'Every unsuccessful attempt by a user to login shall be recorded.',
			'The system must be scalable enough to support 1,000,000 visits at the same time while maintaining optimal performance.',
			'The landing page supporting 5000 users per hour must provide 6 second or less response time in a Chrome desktop browser, including the rendering of text and images and over an LTE connection.',
			'The AI-based lawyer must reply within 5 seconds.',
			'The system must perform without failure in 95 percent of use cases during a month.',
			'The mean time to restore the system (MTTRS) following a system failure must not be greater than 10 minutes.',
			'MTTRS includes all corrective maintenance time and delay time.',
			'The web dashboard must be available to users 99.98 percent of the time every month during business hours.',
			'The payment processing gateway must be PCI DSS compliant.',
			'The error rate of users submitting their payment details must not exceed 10 percent.',
			'Database security must meet HIPAA requirements.',
			'The system must adhere to Web Content Accessibility Guidelines.',
			'The system must encrypt all Personally Identifiable Information (PII) at rest.',
			'The system should be able to develop and deploy in a Azure DevOps environment.',
			'The system must provide a method to track and remove test transactions.',
			'One page of the website contains the contact information of different lawyers of Pakistan.']

//Javascript function is called that dynamically renders a <ul>.
function createList(){
	document.getElementById('root').appendChild(h1);

	//Every time the page is loaded, the list must be in a different order.
	var m = fun.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
    	[fun[m], fun[i]] = [fun[i], fun[m]];
  	}

	for (var i = 0; i < fun.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = fun[i];
		ul1.appendChild(li);
	}
  	document.getElementById("root").appendChild(ul1);
  	//Functional requirements should have red color.
  	ul1.style.color = 'red';

	document.getElementById('root').appendChild(h2);
			
	m = nfun.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
    	[nfun[m], nfun[i]] = [nfun[i], nfun[m]];
  	}

	for (var i = 0; i < nfun.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = nfun[i];
		ul2.appendChild(li);
	}
  	document.getElementById("root").appendChild(ul2);
  	//Non-functional requirements should have blue color.
  	ul2.style.color = 'blue';
}

//Shuffles the order of the list on the page
function shuffleList() {
	while(ul1.hasChildNodes()){
		ul1.removeChild(ul1.firstChild);
	}

	while(ul2.hasChildNodes()){
		ul2.removeChild(ul2.firstChild);
	}

	document.getElementById('root').innerHTML = '';
	createList();
}

//Function that completely hides and shows the list in the same order as before.
function hideShow() {
	if (ul1.style.display === "none" && ul2.style.display === "none") {
		ul1.style.display = "block";
		ul2.style.display = "block";
	} 
	else {
		ul1.style.display = "none";
		ul2.style.display = "none";
	}
}

//Function that shows the list in sorted order
function sortList() {
	while(ul1.hasChildNodes()){
		ul1.removeChild(ul1.firstChild);
	}

	while(ul2.hasChildNodes()){
		ul2.removeChild(ul2.firstChild);
	}

	document.getElementById('root').innerHTML = '';
	document.getElementById('root').appendChild(h1);
			
	fun.sort();
	for (var i = 0; i < fun.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = fun[i];
		ul1.appendChild(li);
	}
  	document.getElementById("root").appendChild(ul1);

  	nfun.sort();

  	document.getElementById('root').appendChild(h2);
  	for (var i = 0; i < nfun.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = nfun[i];
		ul2.appendChild(li);
	}
  	document.getElementById("root").appendChild(ul2);
}