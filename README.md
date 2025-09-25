# Thiranex_Secure-To-Do-List-with-Input-Validation
 ## Overview
The Secure To-Do List is a lightweight web application that allows users to create and manage tasks in a clean, responsive interface. The app emphasizes security and input validation, protecting users from common web vulnerabilities like cross-site scripting (XSS) and malformed input. It is built using HTML, CSS, and JavaScript, with no backend—making it simple, fast, and secure.

 ## Features
- Add and delete tasks dynamically
- Input validation to prevent empty or malicious input
- Basic XSS protection via input sanitization
- Responsive design that works on all devices
- Lightweight—no frameworks or libraries required

  Security Measures Implemented

- Input sanitization and validation in JavaScript
- Escaping of special characters to prevent XSS
- Limited task length to avoid abuse
- Use of content security best practices (suggested for deployment)

  Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
  
 ## Installation
Method 1: Simple Way (No Git Required)

Go to the project’s GitHub repository in your browser
Example:

https://github.com/your-username/secure-todo-list


Click the green Code button


Select Download ZIP

Extract the ZIP file on your computer

Open the project folder, and double-click the file:

index.html


It will open in your default browser — you're done!
 Method 2: Using Git (Command Line)

Open your terminal / command prompt

Clone the repository using:

git clone https://github.com/ychanda058-creator/Thiranex_Secure-To-Do-List-with-Input-Validation.git


Move into the project folder:

cd secure-todo-list


Open index.html in a browser:

Windows/macOS: double-click index.html in the folder

Or from terminal (macOS/Linux):

open index.html


Or for Windows using Git Bash:

start index.html

 
 ## Usage
 Open the app in any modern web browser.

Enter a task in the input field and click "Add Task".

Tasks will appear in a list below.

To delete a task, click the "Delete" button next to it.


 ## Security Considerations
 Input Validation Methods

trim() used to strip extra whitespace

Regex used to block < and > characters (common in XSS)

Length restricted to 100 characters max

JavaScript sanitizes and escapes user input before DOM insertion

 Security Controls Implemented

No dynamic innerHTML without sanitization

textContent / escaped HTML used instead of direct DOM injection

Local-only execution (no remote calls or API misuse)

Suggested deployment with Content Security Policy (CSP) for added protection

 Potential Limitations

No authentication or encryption (suitable only for local/small-scale use)

Tasks are not stored persistently (disappear on reload unless localStorage is added)

Basic validation only—advanced attacks (e.g., Unicode obfuscation) not fully mitigated

Only front-end security — server-side security not included


 ## Author
Chanda kumari yadav
